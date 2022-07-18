import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Menu')
export class Menu extends BaseEntity {
  @PrimaryGeneratedColumn()
  menuId: number;

  @Column()
  REGNumber: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true, length: 500 })
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  imageKey: string;
}
