import { OrderItem } from 'src/orders/order-item.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Products {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  model_name: string;
  @Column()
  max_distance: number;
  @Column()
  max_speed: number;
  @Column()
  min_price: number;
  @Column({ type: 'double' })
  acceleration: number;
  @Column()
  image: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: OrderItem[];
}
