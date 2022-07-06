import {BaseEntity, Entity, Column, PrimaryColumn, OneToOne, JoinColumn} from "typeorm"
import { Review } from "./Review";

@Entity('OwnerReview')   // mySQL 예약어 Like와 겹쳐도 되는가...?
export class OwnerReview extends BaseEntity{
  @PrimaryColumn()
  reserveId: string;

  @Column({
  })
  comment: string;

  @OneToOne(()=>Review, review=> review.ownerreview)
  @JoinColumn()
  review:Review
}