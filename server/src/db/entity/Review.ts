import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('Review')
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn()
  reserveId: number;

  @Column({})
  comment: string;

  @Column()
  email: string;

  @Column({
    nullable: true,
  })
  ownerComment: string;

  @Column()
  rating: number;

  @Column()
  REGNumber: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
