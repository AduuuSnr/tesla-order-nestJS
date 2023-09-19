import { Products } from 'src/products/products.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity('order_items')
export class OrderItem {
  constructor(ininalData: Partial<OrderItem> = null) {
    if (ininalData !== null) {
      Object.assign(this, ininalData);
    }
  }
  @PrimaryColumn({ name: 'order_id', type: 'uuid' })
  orderId: string;

  @Column()
  paint: string;
  @Column()
  paint_price: number;
  @Column()
  interior: string;
  @Column()
  interior_price: number;
  @Column()
  autopilot: string;
  @Column()
  autopilot_price: number;
  @Column()
  fsdc: string;
  @Column()
  fsdc_price: number;

  @ManyToOne(() => Order, (order) => order.orderItems)
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  order: Order;
}
