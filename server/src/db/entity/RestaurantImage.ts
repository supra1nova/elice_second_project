import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('RestaurantImage')
export class RestaurantImage extends BaseEntity {
  @PrimaryColumn()
  imageKey: string;
  @Column()
  REGNumber: string;

  @Column()
  image: string;
}
