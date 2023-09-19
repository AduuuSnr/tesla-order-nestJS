import { OrderItem } from '../order-item.entity';

export class CreateOrderDto {
  product_name: string;
  product_price: number;
  order_items: OrderItem[];
  total_price: number;
}
