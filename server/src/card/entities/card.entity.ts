import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Card extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  ticket: number;

  @Column("decimal", { precision: 5, scale: 2 })
  yield: number;

  @Column()
  days: number;

  @Column()
  sold: number;

  @Column()
  img: string;
}
