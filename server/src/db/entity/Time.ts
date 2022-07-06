import {BaseEntity, Entity, Column, PrimaryGeneratedColumn,PrimaryColumn, CreateDateColumn, ManyToOne, OneToMany} from "typeorm"
import { Reserve } from "./Reserve";
import { Restaurant } from "./Restaurant";

@Entity('Time')
export class Time extends BaseEntity{
  @PrimaryGeneratedColumn()
  timeId: number;

  @Column()
  REGNumber: string;

  @Column({type: "simple-json"})
  startAt: {
    year: string,
    month: string,
    date: string,
    hour: string
  } 

  @Column()
  remainder: number;

  @ManyToOne(()=>Restaurant, restaurant=> restaurant.times, {onDelete:'CASCADE'})
  restaurant:Restaurant

  @OneToMany(()=>Reserve, reserve=>reserve.time)
  reserves: Reserve[]
}