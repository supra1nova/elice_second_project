import {BaseEntity, Entity, Column, PrimaryColumn, OneToOne, JoinColumn} from "typeorm"
import { Restaurant } from "./Restaurant";

// export enum RoleTypes{
//   ADMIN="ADMIN",
//   OWNER="OWNER",
//   USER="USER"
// }

@Entity('User')
export class User extends BaseEntity{
  @PrimaryColumn()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  nickName: string;

  @Column({
  })
  phoneNumber: string;

  @Column({
    nullable:true
  })
  role: string;

  // @Column()
  // REGNumber: string;

  @Column({
  })
  image: string

  @OneToOne(()=>Restaurant)
  @JoinColumn()
  REGNumber: Restaurant
}