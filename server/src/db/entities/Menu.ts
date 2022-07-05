import {BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('Menu')
export class Menu extends BaseEntity{
  @PrimaryGeneratedColumn()
  timeId: number;

  @Column()
  REGNumber: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({
    length: 500
  })
  description: string;

  @Column()
  image: string;
}