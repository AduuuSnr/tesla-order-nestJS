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

  @Column({ name: 'customer_id', type: 'uuid' })
  customerId: string;

  @Column({ name: 'total_amount', type: 'numeric' })
  totalAmount: number;

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

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { cascade: true })
  orderItems: OrderItem[];
}