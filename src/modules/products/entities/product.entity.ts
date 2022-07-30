import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn() id: number;

  @IsNotEmpty()
  @Column()
  name: string;

  @IsNotEmpty()
  @Column()
  description?: string | null;

  @Column('float') price: number;
}
