import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Promise as Bluebird } from "bluebird";
import { Product } from "../products/entities/product.entity";
import { faker } from "@faker-js/faker";
import { SeederInterface } from "./seeder.interface";
import { Order } from "../orders/entities/order.entity";

@Injectable()
export class ProductsSeeder implements SeederInterface {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
  ) {}

  async seed() {
    const data: Partial<Product>[] = [];

    const orders = await this.ordersRepository.find();

    for (let i = 0; i < 100; i++) {
      data.push({
        order: faker.helpers.arrayElement(orders),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.datatype.number({ min: 100, max: 10000, precision: 0.01 }),
      });
    }

    await Bluebird.each(data, async data => {
      await this.productRepository.insert(data);
    })
  }
}
