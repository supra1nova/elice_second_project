import {BaseEntity, Entity, Column, PrimaryColumn, OneToMany} from "typeorm"
import { Restaurant } from "./Restaurant";

@Entity('Category')
export class Category extends BaseEntity{
  @PrimaryColumn()
  category: string;

  @OneToMany(()=> Restaurant, (restaurants)=>restaurants.categoryEntity, { cascade: ['insert', 'update'] })
  restaurants: Restaurant[]
}