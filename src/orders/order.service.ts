import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository, UpdateResult } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dtos/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
  ) {}

  async create(dto: CreateOrderDto) {
    const product = this.ordersRepository.create(dto);
    console.log(product);
    console.log(dto.order_items);

    product.orderItems = dto.order_items;

    return await this.ordersRepository.save(product);
  }
  async findAllOrders() {
    return await this.ordersRepository.query(`SELECT
    o.*,
    oi.*
    FROM
        orders o
    INNER JOIN
        order_items oi
    ON
        o.id = oi.order_id;
    `);
  }

  async findOrder(id: string): Promise<Order> {
    return await this.ordersRepository.findOneBy({ id: id });
  }

  async updateOrder(id: string, order: Order): Promise<UpdateResult> {
    await this.findOrder(id);
    return await this.ordersRepository.update(id, order);
  }
}
