import { Injectable, UnprocessableEntityException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository, UpdateResult } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dtos/create-order.dto';
import { ProductService } from 'src/products/products.service';


@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
    private readonly productService: ProductService,

  ) {}

  async create(
    createOrderDto: CreateOrderDto,
  ): Promise<Order> {

    const productIds = createOrderDto.orderItems.map((item) => item.productId);
    const products = await this.productService.checkIfProductsExist(
      productIds,
    );


    if (!products || products.length != productIds.length) {
      throw new UnprocessableEntityException(
        'The order could not be processed',
      );
    }

    const order = new Order({
      totalAmount: createOrderDto.totalAmount,
    });

    order.orderItems = createOrderDto.orderItems;


    const savedOrder = await this.ordersRepository.save(order);

   
    const updatedOrder = { ...savedOrder };
    return updatedOrder;
  }

  async findOrder(id: string): Promise<Order> {
    return await this.ordersRepository.findOneBy({id:id});
  }

  async updateOrder(id: string, order: Order): Promise<UpdateResult> {
    await this.findOrder(id);
    return await this.ordersRepository.update(id, order);
  }
}