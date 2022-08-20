import { TypeOrmModule } from "@nestjs/typeorm";
import { seedOrmConfig } from "../../ormConfig";
import { Product } from "../products/entities/product.entity";
import { SeedService } from "./seed.service";
import { Module } from "@nestjs/common";
import { ProductsSeeder } from "./products.seeder";
import { Order } from "../orders/entities/order.entity";
import { OrdersSeeder } from "./orders.seeder";

@Module({
  imports: [
    TypeOrmModule.forRoot(seedOrmConfig),
    TypeOrmModule.forFeature([
      Product,
      Order,
    ]),
  ],
  controllers: [],
  providers: [
    SeedService,
    ProductsSeeder,
    OrdersSeeder,
  ],
})
export class SeedModule {

}
