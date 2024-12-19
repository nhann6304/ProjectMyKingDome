import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from './product.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { Request } from 'express';
import { ProductCategoriesService } from '../product-categories/product-categories.service';
import { AQueries } from 'src/abstracts/common/ABaseQueries.abstracts';
import { UtilORM } from 'src/utils/orm.uutils';
import { EAgeGroup } from 'src/enums/EAge.enum';
import { IFilter } from 'src/interfaces/common/IFilterAction.interface';
import { UtilConvert } from 'src/utils/convert.ultils';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity)
        private productRepository: Repository<ProductsEntity>,
        private productCategoriesService: ProductCategoriesService
    ) { }


    async findById({ id }: { id: string }) {
        const data = await this.productRepository.findOne({
            where: { id },
            relations: {
                pc_category: true
            }
        })
        return data
    }

    async createProduct({ req, productData }: { req: Request, productData: CreateProductDto }) {
        const me = req['user'];

        const findProductCate = await this.productCategoriesService.findOneByID(productData.productCate_Id);

        if (!findProductCate) {
            throw new BadRequestException("Danh mục sản phẩm không tồn tại");
        }

        const newProduct = this.productRepository.create({ createdBy: me, pc_category: findProductCate, ...productData });

        const result = await this.productRepository.save(newProduct);

        return result;
    }

    async findAllProduct({ query }: { query: AQueries<ProductsEntity> }) {
        const { isDeleted, fields, limit, page, filter } = query;

        const objFilter = UtilConvert.convertJsonToObject(filter)

        const ALIAS_NAME = "product";

        const result = new UtilORM<ProductsEntity>(this.productRepository, ALIAS_NAME)
            .leftJoinAndSelect(["pc_category"])
            .select(fields)
            .skip({ limit, page })
            .take({ limit })
            .where(objFilter, isDeleted)

        const queryBuilder: SelectQueryBuilder<ProductsEntity> = result.build();

        const [items, totalItems] = await Promise.all([
            queryBuilder.getMany(),
            queryBuilder.getCount(),
        ]);
        return {
            items,
        }
    }
}





