import {BaseEntity, Entity, Column, PrimaryColumn} from "typeorm"

@Entity('Restaurant')
export class Restaurant extends BaseEntity{
  @PrimaryColumn()
  REGNUMBER: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column({
    type: "simple-json",
    nullable: true
  })
  address: {
    address1: string,
    address2: string,
    postalcode: number
  } 

  @Column({
    length: 10
  })
  phoneNumber: string;

  @Column()
  image: string;


}