import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parts } from './parts.entity';
import { PartsController } from './parts.controller';
import { PartsService } from './parts.service';

@Module({
    imports: [TypeOrmModule.forFeature([Parts])],
    controllers: [PartsController],
    providers: [PartsService],
    exports:[PartsService]
})
export class PartsModule {}
