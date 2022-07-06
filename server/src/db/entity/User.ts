import {BaseEntity, Entity, Column, PrimaryColumn, OneToOne, JoinColumn, OneToMany} from "typeorm"
import { Reserve } from "./Reserve";
import { Restaurant } from "./Restaurant";
import { Wish } from "./Wish";

@Entity('User')
export class User extends BaseEntity{
  @PrimaryColumn()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  nickName: string;

  @Column({
  })
  phoneNumber: string;

  @Column({})
  role: string;

  @Column({ nullable: true })
  REGNumber: string;

  @Column({
  })
  image: string

  @OneToOne(()=>Restaurant, (restaurant)=>restaurant.user, {nullable: true})
  @JoinColumn()
  restaurant: Restaurant

  @OneToMany(()=>Wish, wish=>wish.user)
  wishes:Wish[];

  @OneToMany(()=>Reserve,reserve=>reserve.user)
  reserves:Reserve[];
}