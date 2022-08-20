import { Injectable, Logger } from '@nestjs/common';
import { Promise as Bluebird } from 'bluebird';
import { Connection } from "typeorm";
import { ProductsSeeder } from "./products.seeder";
import { SeederInterface } from "./seeder.interface";
import { OrdersSeeder } from "./orders.seeder";

@Injectable()
export class SeedService {
  private readonly seeders: SeederInterface[] = [];
  private readonly logger = new Logger(SeedService.name);

  constructor(
    private readonly connection: Connection,
    private readonly productsSeeder: ProductsSeeder,
    private readonly ordersSeeder: OrdersSeeder,
  ) {
    this.seeders = [
      this.ordersSeeder,
      this.productsSeeder,
    ];
  }

  async seed() {
    await this.connection.synchronize(true);

    await Bluebird.each(this.seeders, async (seeder: SeederInterface) => {
      this.logger.log(`Seeding ${seeder.constructor.name}`);
      await seeder.seed();
    });
  }
}

