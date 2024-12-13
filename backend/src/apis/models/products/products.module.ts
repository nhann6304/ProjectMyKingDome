import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from './product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsEntity]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule { }