import {BaseEntity, Entity, Column} from "typeorm"

@Entity('Rating')
export class Rating extends BaseEntity{
  @Column()
  REGNumber: string;

  @Column({
    type: 'number',
    default: 0
  })
  Five: number;

  @Column({
    type: 'number',
    default: 0
  })
  Four: number;

  @Column({
    type: 'number',
    default: 0
  })
  Three: number;

  @Column({
    type: 'number',
    default: 0
  })
  Two: number;

  @Column({
    type: 'number',
    default: 0
  })
  One: number;

  @Column({
    type: 'number',
    default: 0
  })
  Average: number;
}