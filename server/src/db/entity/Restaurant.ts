import { BaseEntity, Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity('Restaurant')
export class Restaurant extends BaseEntity {
  @PrimaryColumn()
  REGNumber: string;

  @Column()
  name: string;

  @Column()
  ownerEmail: string;

  @Column()
  address1: string;

  @Column()
  address2: string;

  @Column()
  postalcode: number;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column()
  category: string;

  @Column({ nullable: true, length: 1000 })
  description: string;

  @Column({
    default: 0,
  })
  wishers: number;

  @Column({
    default: 0,
    type: 'double',
  })
  average: number;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;
}
