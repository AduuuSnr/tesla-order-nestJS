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

  findAll(){
    return this.partsRepository.find()
  }

  async update(id: number, dto: CreateAdditionalPartsDto){
    const parts = await this.partsRepository.findOne({where: {id}})
    Object.assign(parts,dto);
    return await this.partsRepository.save(parts);    
  }
  async delete(id: number){
    const parts = await this.partsRepository.findOne({where: {id}})
    return await this.partsRepository.remove(parts);    
  } 

}
