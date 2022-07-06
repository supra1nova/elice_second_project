import { reviewRouter } from "src/routers";
import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne} from "typeorm"
import { Review } from "./Review";
import { Time } from "./Time";
import { User } from "./User";

@Entity('Reserve')   // mySQL 예약어 Like와 겹쳐도 되는가...?
export class Reserve extends BaseEntity{
  @PrimaryGeneratedColumn()
  reserveId: string;

  @Column()
  timeStamp: string;

  @Column()
  email: string;

  @Column()
  number: number;

  @Column(
    {type: "simple-json"}
  )
  menus: string;

  @Column()
  totalPrice: number;

  @ManyToOne(()=>Time, time=>time.reserves)
  time:Time

  @OneToOne(()=>Review, review=> review.reserve)
  review:Review
  
  @ManyToOne(()=>User, user=>user.reserves)
  user:User;
}