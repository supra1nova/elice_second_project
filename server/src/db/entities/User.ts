import {BaseEntity, Entity, Column, PrimaryColumn} from "typeorm"

export enum RoleTypes{
  ADMIN="ADMIN",
  OWNER="OWNER",
  USER="USER"
}

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
    length: 10
  })
  phoneNumber: string;

  @Column({
    type:"enum",
    enum:RoleTypes
  })
  role: string;

  @Column()
  REGNumber: string;

  @Column({
    type:"simple-json",
  })
  image: string
}