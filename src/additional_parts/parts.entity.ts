import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'parts' })
export class Parts {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  part_name: string;
  @Column()
  part_price: number;
  @Column()
  part_category: string;
  @Column()
  part_for_vehicle: number;
}
