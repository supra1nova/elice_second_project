import {BaseEntity, Entity, Column, PrimaryGeneratedColumn,PrimaryColumn, CreateDateColumn, ManyToOne, OneToMany} from "typeorm"
import { Reserve } from "./Reserve";
import { Restaurant } from "./Restaurant";

@Entity('Wish')
export class Wish extends BaseEntity{
  @PrimaryGeneratedColumn()
  wishId: number;

  @Column()
  REGNumber: string;

  @Column()
  email: string;

  @CreateDateColumn({type:"timestamp"})
  createdAt: Date;
  
  // @ManyToOne(()=>Restaurant, restaurant=> restaurant.times, {onDelete:'CASCADE'})
  // restaurant:Restaurant

  // @OneToMany(()=>Reserve, reserve=>reserve.time,{ cascade: ['insert', 'update'] })
  // reserves: Reserve[]
}