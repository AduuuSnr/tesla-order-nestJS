import { Body, Controller, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { CreateAdditionalPartsDto } from './dtos/create-additional-parts.dto';
import { PartsService } from './parts.service';


@Controller("parts")
export class PartsController {
  constructor(private readonly partsService: PartsService) {}

  @Post()
  create(@Body() dto: CreateAdditionalPartsDto) {
    return this.partsService.create(dto);
  }

  @Get()
  findAll() {
    return this.partsService.findAll();
  }
  @Put(':id')
  update(@Param('id') id:number, @Body() dto: CreateAdditionalPartsDto){
    return this.partsService.update(id, dto)
  }
  @Delete(':id')
  delete(@Param('id') id:number, @Body() dto: CreateAdditionalPartsDto){
    return this.partsService.delete(id)
  }
}
