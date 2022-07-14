import {BaseEntity, Entity, Column, PrimaryColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import { Restaurant } from "./Restaurant";

@Entity('RestaurantImage')
export class RestaurantImage extends BaseEntity{
  @PrimaryColumn()
  imageKey: string;
  @Column()
  REGNumber: string;

  @Column()
  image: string;

  // @OneToMany(()=> Restaurant, (restaurants)=>restaurants.categoryEntity, { cascade: ['insert', 'update'] })
  // restaurants: Restaurant[]
}