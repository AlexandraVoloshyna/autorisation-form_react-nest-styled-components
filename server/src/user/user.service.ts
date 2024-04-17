import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import * as bcrypt from "bcrypt";
import { RegisterDto } from "./dto/register-user.dto";
import { LoginDto } from "./dto/login-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const isExist = await this.userRepository.findOne({
      where: { email: registerDto.email },
    });
    if (isExist) {
      throw new BadRequestException("User already exist");
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(registerDto.password, salt);
    const user = await this.userRepository.create({
      email: registerDto.email,
      password: hashedPassword,
    });
    await this.userRepository.save(user);
  }

  async login(loginDto: LoginDto) {
    const user = await this.userRepository.findOne({
      where: { email: loginDto.email },
    });
    if (!user) {
      throw new BadRequestException("Invalid email or password");
    }
    const passwordMatch = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!passwordMatch) {
      throw new BadRequestException("Invalid email or password");
    }
    const token = await this.jwtService.signAsync({ id: user.id });
    return token;
  }
}
