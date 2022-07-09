import {BaseEntity, Entity, Column, PrimaryGeneratedColumn,PrimaryColumn, CreateDateColumn, ManyToOne, OneToMany} from "typeorm"
import { Reserve } from "./Reserve";
import { Restaurant } from "./Restaurant";

@Entity('Time')
export class Time extends BaseEntity{
  @PrimaryGeneratedColumn()
  timeId: number;

  @Column()
  REGNumber: string;

  // @Column()
  // milliseconds: number; //2019-05-31-09:00

  // @Column()
  // month: number; 
  // @Column()
  // date: number; 
  // @Column()
  // hour: number; 
  
  @Column({type: "simple-json"})
  
  startAt: {
    year: number,
    month: number,
    date: number,
    hour: number
  }

  @Column()
  remainder: number;

  @Column()
  initialRemainder:number;

  // @ManyToOne(()=>Restaurant, restaurant=> restaurant.times, {onDelete:'CASCADE'})
  // restaurant:Restaurant

  // @OneToMany(()=>Reserve, reserve=>reserve.time,{ cascade: ['insert', 'update'] })
  // reserves: Reserve[]
}