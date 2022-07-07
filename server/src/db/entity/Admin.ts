import {BaseEntity, Entity, Column, PrimaryColumn, OneToOne, JoinColumn, PrimaryGeneratedColumn} from "typeorm"

@Entity('Admin')   // mySQL 예약어 Like와 겹쳐도 되는가...?
export class Admin extends BaseEntity{
  @PrimaryColumn()
  email: string;

  @Column({
  })
  password: string;

}