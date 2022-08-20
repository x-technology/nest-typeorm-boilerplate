import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from "../../products/entities/product.entity";

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  name: string;

  @OneToMany<Product>(() => Product, product => product.order)
  products: Product[];
}
