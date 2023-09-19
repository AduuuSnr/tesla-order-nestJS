import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {}

  async create(dto: CreateProductDto) {
    const product = this.productsRepository.create(dto);
    return await this.productsRepository.save(product);
  }

  findAll() {
    return this.productsRepository.find();
  }
  findProduct(id: number) {
    return this.productsRepository.findOne({ where: { id } });
  }

  async update(id: number, dto: CreateProductDto) {
    const product = await this.productsRepository.findOne({ where: { id } });
    Object.assign(product, dto);
    return await this.productsRepository.save(product);
  }
  async delete(id: number) {
    const product = await this.productsRepository.findOne({ where: { id } });
    return await this.productsRepository.remove(product);
  }
  async checkIfProductsExist(id: string[]): Promise<Products[]> {
    return await this.productsRepository.findByIds(id);
  }
}
