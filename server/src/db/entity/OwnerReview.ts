import {BaseEntity, Entity, Column, PrimaryColumn, OneToOne, JoinColumn, PrimaryGeneratedColumn} from "typeorm"
import { Review } from "./Review";

@Entity('OwnerReview')   // mySQL 예약어 Like와 겹쳐도 되는가...?
export class OwnerReview extends BaseEntity{
  @PrimaryGeneratedColumn()
  reserveId: number;

  @Column({
  })
  comment: string;

  @OneToOne(()=>Review, review=> review.ownerreview,{onDelete:"CASCADE"})
  @JoinColumn()
  review:Review
}