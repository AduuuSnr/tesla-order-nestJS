import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrdersService } from './order.service';
import { OrdersController } from './order.controller';
import { ProductsModule } from 'src/products/products.module';
import { PartsModule } from 'src/additional_parts/parts.module';


@Module({
  imports: [TypeOrmModule.forFeature([Order]),ProductsModule,PartsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}