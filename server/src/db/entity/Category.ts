import {BaseEntity, Entity, Column, PrimaryColumn} from "typeorm"

@Entity('Category')
export class Category extends BaseEntity{
  @PrimaryColumn()
  category: string;
}