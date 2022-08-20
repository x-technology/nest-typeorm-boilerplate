import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Promise as Bluebird } from "bluebird";
import { Product } from "../products/entities/product.entity";
import { faker } from "@faker-js/faker";
import { SeederInterface } from "./seeder.interface";
import { Order } from "../orders/entities/order.entity";

@Injectable()
export class OrdersSeeder implements SeederInterface {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async seed() {
    const data: Partial<Order>[] = [];

    for (let i = 0; i < 3; i++) {
      data.push({
        name: faker.commerce.productName(),
      });
    }

    await Bluebird.each(data, async data => {
      await this.orderRepository.insert(data);
    })
  }
}
