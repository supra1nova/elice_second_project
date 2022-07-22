import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('Rating')
export class Rating extends BaseEntity {
  @PrimaryColumn()
  REGNumber: string;

  @Column({
    default: 0,
  })
  Five: number;

  @Column({
    default: 0,
  })
  Four: number;

  @Column({
    default: 0,
  })
  Three: number;

  @Column({
    default: 0,
  })
  Two: number;

  @Column({
    default: 0,
  })
  One: number;

  @Column({
    default: 0,
    type: 'double',
  })
  Average: number;
}
