import { Products } from "src/products/products.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class OrderItem {
    constructor (ininalData: Partial<OrderItem> = null) {
        if(ininalData !== null){
            Object.assign(this,ininalData)
        }
    }
    @PrimaryColumn({name:'order_id', type: 'uuid'})
    orderId: string;
    @PrimaryColumn({ name: 'product_id', type: 'uuid' })
  productId: string;

  @Column({ name: 'unit_price', type: 'numeric' })
  unitPrice: number;

  @Column({ type: 'numeric' })
  quantity: number;

  @ManyToOne(() => Products, (product) => product.orderItems)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Products;

  @ManyToOne(() => Order, (order) => order.orderItems)
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  order: Order;
    
}