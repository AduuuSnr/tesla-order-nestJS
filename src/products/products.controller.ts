import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }
  @Get(':id')
  findProduct(@Param('id') id: number) {
    return this.productService.findProduct(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateProductDto) {
    return this.productService.update(id, dto);
  }
  @Delete(':id')
  delete(@Param('id') id: number, @Body() dto: CreateProductDto) {
    return this.productService.delete(id);
  }
}
