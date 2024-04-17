import { Controller, Post, Body, HttpStatus, HttpCode } from "@nestjs/common";
import { UserService } from "./user.service";
import { LoginDto } from "./dto/login-user.dto";
import { RegisterDto } from "./dto/register-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDto: RegisterDto) {
    await this.userService.register(registerDto);
    return { message: "user register successfully", data: [] };
  }

  @Post("login")
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    const token = await this.userService.login(loginDto);
    return { message: "user sign in successfully", data: token };
  }
}
