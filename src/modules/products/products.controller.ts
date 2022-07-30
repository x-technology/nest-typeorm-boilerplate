import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Product,
  },
  query: {
    alwaysPaginate: true,
  },
})
@ApiTags('products')
@Controller('products')
export class ProductsController implements CrudController<Product> {
  constructor(public service: ProductsService) {}
}
