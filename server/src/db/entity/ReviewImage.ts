import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('ReviewImage')
export class ReviewImage extends BaseEntity {
  @PrimaryColumn()
  imageKey: string;

  @Column()
  reserveId: number;

  @Column()
  image: string;
}
