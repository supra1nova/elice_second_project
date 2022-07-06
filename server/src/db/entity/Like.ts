import {BaseEntity, Entity, Column, PrimaryColumn} from "typeorm"

@Entity('Like')   // mySQL 예약어 Like와 겹쳐도 되는가...?
export class Like extends BaseEntity{
  @PrimaryColumn()
  REGNumber: string;

  @PrimaryColumn()
  email: string;
}