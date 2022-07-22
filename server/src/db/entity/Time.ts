import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Time')
export class Time extends BaseEntity {
  @PrimaryGeneratedColumn()
  timeId: number;

  @Column()
  REGNumber: string;

  @Column()
  year: number;

  @Column()
  month: number;

  @Column()
  date: number;

  @Column()
  hour: number;

  @Column()
  remainder: number;

  @Column()
  initialRemainder: number;
}
