import {BaseEntity, Entity, Column, PrimaryColumn,CreateDateColumn, OneToOne,JoinColumn, OneToMany, ManyToMany, ManyToOne, Like, Timestamp} from "typeorm"
import {User} from "./User"
import {Menu} from "./Menu"
import { Category } from "./Category";
import { Time } from "./Time";
@Entity('Restaurant')
export class Restaurant extends BaseEntity{
  @PrimaryColumn()
  REGNumber: string;

  @Column()
  name: string;

  @Column()
  ownerEmail: string;

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

  @Column()
  category: string;

  @Column({nullable:true, length:1000})
  description:string;
  
  @CreateDateColumn({
    type: "timestamp",
    // default: () => "CURRENT_TIMESTAMP(6)"
  })
  createdAt: Date;

  // @OneToOne( ()=>User, (user)=> user.restaurant, {onDelete:'CASCADE'})//회원 삭제시 식당 삭제
  // @JoinColumn()
  // user: User;

  // @OneToMany(()=> Menu, menu=>menu.restaurant,{ cascade: ['insert', 'update'] })
  // menus: Menu[];

  // @ManyToOne(()=> Category, categoryEntity=>categoryEntity.restaurants ,{onDelete:'SET NULL'})
  // categoryEntity:Category 

  // @OneToMany(()=>Time, time=>time.restaurant, { cascade: ['insert', 'update'] })
  // times: Time[];


}