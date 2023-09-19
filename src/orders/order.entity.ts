import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderItem } from './order-item.entity';
import { PaymentStatus } from 'src/commons/enums/payment-status.enum';

@Entity('orders')
export class Order {
  constructor(intialData: Partial<Order> = null) {
    if (intialData !== null) {
      Object.assign(this, intialData);
    }
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'product_name', type: 'varchar' })
  product_name: string;

  @Column({ name: 'product_price', type: 'numeric' })
  product_price: number;
  @Column({ name: 'total_price', type: 'numeric' })
  total_price: number;

  @Column({
    name: 'payment_status',
    type: 'varchar',
    default: PaymentStatus.Created,
  })
  paymentStatus: PaymentStatus;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    readonly: true,
  })
  createdAt: string;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
  updatedAt: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, {
    cascade: true,
  })
  orderItems: OrderItem[];
}
