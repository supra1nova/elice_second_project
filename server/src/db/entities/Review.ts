import {BaseEntity, Entity, Column, PrimaryColumn} from "typeorm"

@Entity('Review')   // mySQL 예약어 Like와 겹쳐도 되는가...?
export class Review extends BaseEntity{
  @PrimaryColumn()
  reserveId: string;

  @Column({
    length: 500
  })
  comment: string;

  @Column()
  email: string;

  @Column()
  rating: number;

  @Column(
    {type: "simple-json"}
  )
  image: string;
}