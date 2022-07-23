import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, PrimaryColumn } from 'typeorm';

@Entity('Review')
export class Review extends BaseEntity {
  @PrimaryColumn()
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
