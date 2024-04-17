import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Card } from "./entities/card.entity";

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  async getAllCards(): Promise<Card[]> {
    const cards = await this.cardRepository.find();
    return cards || [];
  }
}
