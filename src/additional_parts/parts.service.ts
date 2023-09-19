import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Parts } from './parts.entity';
import { CreateAdditionalPartsDto } from './dtos/create-additional-parts.dto';

@Injectable()
export class PartsService {
  constructor(
    @InjectRepository(Parts)
    private readonly partsRepository: Repository<Parts>,
  ) {}

  async create(dto: CreateAdditionalPartsDto) {
    const product = this.partsRepository.create(dto);
    return await this.partsRepository.save(product);
  }

  findAll() {
    return this.partsRepository.find();
  }

  async update(id: number, dto: CreateAdditionalPartsDto) {
    const parts = await this.partsRepository.findOne({ where: { id } });
    Object.assign(parts, dto);
    return await this.partsRepository.save(parts);
  }
  async delete(id: number) {
    const parts = await this.partsRepository.findOne({ where: { id } });
    return await this.partsRepository.remove(parts);
  }
  async getParts(id: number) {
    return await this.partsRepository.findOne({
      where: { part_for_vehicle: id },
    });
  }
  async findAllPartsWithProducts(): Promise<any[]> {
    return this.partsRepository.query(`SELECT
    p.part_name AS part,
    p.part_price AS part_price,
    p.part_category AS category,
    pr.model_name AS product
FROM
    parts p
INNER JOIN
    part_product_relationships r ON p.id = r.part_id
INNER JOIN
    products pr ON r.product_id =pr.id;`);
  }
  async checkIfProductsExist(id: string[]): Promise<Parts[]> {
    return await this.partsRepository.findByIds(id);
  }
}
