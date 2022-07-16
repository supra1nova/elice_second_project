import {BaseEntity, Entity, Column, PrimaryColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import { Restaurant } from "./Restaurant";

@Entity('ReviewImage')
export class ReviewImage extends BaseEntity{
  @PrimaryColumn()
  imageKey: string;

  @Column()
  reserveId: number;

  @Column()
  image: string;
  // @OneToMany(()=> Restaurant, (restaurants)=>restaurants.categoryEntity, { cascade: ['insert', 'update'] })
  // restaurants: Restaurant[]
}