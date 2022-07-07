import {BaseEntity, Entity, Column, PrimaryColumn, ManyToMany, ManyToOne} from "typeorm"
import { Restaurant } from "./Restaurant";
import { User } from "./User";

@Entity('Wish')   // mySQL 예약어 Like와 겹쳐도 되는가...?
export class Wish extends BaseEntity{
  @PrimaryColumn()
  REGNumber: string;

  @PrimaryColumn()
  email: string;

  @ManyToOne(()=>Restaurant, restaurant=>restaurant.wishes, {onDelete:"CASCADE"})
  restaurant: Restaurant;

  @ManyToOne(()=>User, user=>user.wishes,{onDelete:"CASCADE"})
  user:User;
}