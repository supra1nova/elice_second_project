import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne,CreateDateColumn} from "typeorm"
import { Review } from "./Review";
import { Time } from "./Time";
import { User } from "./User";

@Entity('Reserve')   // mySQL 예약어 Like와 겹쳐도 되는가...?
export class Reserve extends BaseEntity{
  @PrimaryGeneratedColumn()
  reserveId: number;

  @Column()
  timeId:number;

  @CreateDateColumn({type:"timestamp"})
  createdAt: Date;

  @Column()
  email: string;

  @Column()
  number: number;

  @Column(
    {type: "simple-array"}
  )
  menuList: number[];

  @Column(
    {type: "simple-array"}
  )
  quantityList: number[];

  @Column()
  totalPrice: number;

  @Column()
  REGNumber: string;

  // @ManyToOne(()=>Time, time=>time.reserves)
  // time:Time

  // @OneToOne(()=>Review, review=> review.reserve)
  // review:Review
  
  // @ManyToOne(()=>User, user=>user.reserves)
  // user:User;
}