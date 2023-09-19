import { Controller, Post, Body, Get, Req } from '@nestjs/common';

import { OrdersService } from './order.service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() dto: CreateOrderDto) {
    return this.ordersService.create(dto);
  }
  @Get()
  getAllOrders() {
    return this.ordersService.findAllOrders();
  }
}
