import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('Wish')
export class Wish extends BaseEntity {
  @PrimaryGeneratedColumn()
  wishId: number;

  @Column()
  REGNumber: string;

  @Column()
  email: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
