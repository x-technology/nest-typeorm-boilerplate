import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Order } from "../../orders/entities/order.entity";

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn() id: number;

  @IsNotEmpty()
  @Column()
  name: string;

  @IsNotEmpty()
  @Column()
  description?: string | null;

  @ManyToOne<Order>(() => Order, order => order.products)
  order: Order;

  @Column('float') price: number;
}
