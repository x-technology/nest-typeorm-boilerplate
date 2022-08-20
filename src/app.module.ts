import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ormConfig } from "./ormConfig";
import { OrdersModule } from "./modules/orders/orders.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    ProductsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
