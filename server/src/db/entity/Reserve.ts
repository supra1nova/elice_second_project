import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('Reserve')
export class Reserve extends BaseEntity {
  @PrimaryGeneratedColumn()
  reserveId: number;

  @Column()
  timeId: number;

  @Column()
  email: string;

  @Column()
  number: number;

  // @Column({ type: 'simple-array' })
  // menuList: number[];

  // @Column({ type: 'simple-array' })
  // quantityList: number[];

  // @Column()
  // totalPrice: number;
  @Column()
  comment: string;
  @Column()
  phoneNumber: string;
  @Column()
  name:string;
  @Column()
  REGNumber: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
