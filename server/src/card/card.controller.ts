import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from "@nestjs/common";
import { CardService } from "./card.service";
import { AuthGuard } from "../auth/auth.guard";

@Controller("cards")
export class CardController {
  constructor(private readonly cardsService: CardService) {}
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get()
  async getCards() {
    const cards = await this.cardsService.getAllCards();
    return { message: "cards retrieved successfully", data: cards };
  }
}
