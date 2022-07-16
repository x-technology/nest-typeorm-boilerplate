import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column() description: string;

  @Column('float') price: number;
}
