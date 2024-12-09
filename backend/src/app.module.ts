import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import mysqlConfig from './config/mysql.config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './apis/models/users/users.module';
import { AuthModule } from './apis/common/auth/auth.module';
import { ProductCategoriesModule } from './apis/models/product-categories/product-categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mysqlConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get<TypeOrmModuleOptions>("mysql"),
    }),

    UsersModule,
    AuthModule,

    //Product    
    ProductCategoriesModule


  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
