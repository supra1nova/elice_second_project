import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Restaurant } from "./Restaurant";

@Entity('Menu')
export class Menu extends BaseEntity{
  @PrimaryGeneratedColumn()
  menuId: number;

  @Column()
  REGNumber: string;

  @Column()
  name: string;

  @Column({nullable:true
  })
  price: number;

  @Column({nullable:true, length:500
  })
  description: string;

  @Column({nullable:true})
  image: string;

  // @ManyToOne(()=> Restaurant, restaurant=>restaurant.menus, {onDelete: 'CASCADE'})// 식당 삭제시 메뉴 삭제
  // restaurant: Restaurant;
}