import {BaseEntity, Entity, Column, PrimaryColumn, OneToOne,JoinColumn, OneToMany, ManyToMany, ManyToOne, Like} from "typeorm"
import {User} from "./User"
import {Menu} from "./Menu"
import { Category } from "./Category";
import { Time } from "./Time";
import { Wish } from "./Wish"
@Entity('Restaurant')
export class Restaurant extends BaseEntity{
  @PrimaryColumn()
  REGNumber: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column({
    type: "simple-json",
  })
  address: {
    address1: string,
    address2: string,
    postalcode: number
  } 

  @Column({nullable:true
  })
  phoneNumber: string;

  @Column({nullable:true})
  image: string;

  @OneToOne( ()=>User, (user)=> user.restaurant, {onDelete:'CASCADE'})//회원 삭제시 식당 삭제
  user: User

  @OneToMany(()=> Menu, menu=>menu.restaurant)
  menus: Menu[];

  @ManyToOne(()=> Category, categoryEntity=>categoryEntity.restaurants ,{onDelete:'SET NULL'})
  categoryEntity:Category 

  @OneToMany(()=>Time, time=>time.restaurant )
  times: Time[];

  @OneToMany(()=>Wish, wish=>wish.restaurant)
  wishes:Wish[];
}