import { Products } from 'src/products/products.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
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
  @Column({ type: 'text' })
  part_for_vehicle: number;
}
