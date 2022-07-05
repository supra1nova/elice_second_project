import {BaseEntity, Entity, Column, PrimaryGeneratedColumn,PrimaryColumn, CreateDateColumn} from "typeorm"

@Entity('Time')
export class Restaurant extends BaseEntity{
  @PrimaryGeneratedColumn()
  timeId: number;

  @Column()
  REGNumber: string;

  @Column({type: "simple-json"})
  startAt: {
    year: string,
    month: string,
    date: number
    hour: number
  } 

  @Column()
  remainder: number;

}