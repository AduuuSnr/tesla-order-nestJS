import { Controller, Post, Body, Get, Req } from '@nestjs/common';

import { Request } from 'express';
import { OrdersService } from './order.service';
import { CreateOrderDto } from './dtos/create-order.dto';
import { Order } from './order.entity';


@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(
    @Body() createOrderDto: CreateOrderDto,
    @Req() req: Request,
  ): Promise<Order> {
    return this.ordersService.create(createOrderDto);
  }
}