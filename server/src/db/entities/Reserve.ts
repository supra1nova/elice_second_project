import {BaseEntity, Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity('Reserve')   // mySQL 예약어 Like와 겹쳐도 되는가...?
export class Reserve extends BaseEntity{
  @PrimaryGeneratedColumn()
  reserveId: string;

  @Column()
  timeStamp: string;

  @Column()
  email: string;

  @Column()
  number: number;

  @Column(
    {type: "simple-json"}
  )
  menus: string;

  @Column()
  totalPrice: number;
}