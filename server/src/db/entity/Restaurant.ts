import {BaseEntity, Entity, Column, PrimaryColumn, OneToOne,JoinColumn} from "typeorm"
import {User} from "./user"

@Entity('Restaurant')
export class Restaurant extends BaseEntity{
  @PrimaryColumn()
  REGNumber: string;

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
  })
  phoneNumber: string;

  @Column()
  image: string;

  @OneToOne( ()=>User, (user)=> user.REGNumber)
  @JoinColumn()
  user: User
}