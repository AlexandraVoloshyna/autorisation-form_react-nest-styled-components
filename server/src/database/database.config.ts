import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Card } from "../card/entities/card.entity";
import { User } from "../user/entities/user.entity";

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: "postgres",
      url: this.configService.get<string>("DB_URl"),
      synchronize: true,
      entities: [Card, User],
    };
  }
}
