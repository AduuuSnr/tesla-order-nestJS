import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { ProductsController } from './products.controller';
import { ProductService } from './products.service';
@Module({
    imports: [TypeOrmModule.forFeature([Products])],
    controllers: [ProductsController],
    providers: [ProductService],
    exports: [ProductService],
})
export class ProductsModule {}
