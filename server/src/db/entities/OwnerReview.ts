import {BaseEntity, Entity, Column, PrimaryColumn} from "typeorm"

@Entity('OwnerReview')   // mySQL 예약어 Like와 겹쳐도 되는가...?
export class OwnerReview extends BaseEntity{
  @PrimaryColumn()
  reserveId: string;

  @Column({
    length: 500
  })
  comment: string;
}