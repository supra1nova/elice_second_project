import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Restaurant } from "./Restaurant";

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
  })
  description: string;

  @Column()
  image: string;

  @ManyToOne(()=> Restaurant, restaurant=>restaurant.menus, {onDelete: 'CASCADE'})// 식당 삭제시 메뉴 삭제
  restaurant: Restaurant;
}