import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrdersService } from './order.service';
import { OrdersController } from './order.controller';
import { ProductsModule } from 'src/products/products.module';


@Module({
  imports: [TypeOrmModule.forFeature([Order]),ProductsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}