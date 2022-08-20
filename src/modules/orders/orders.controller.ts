import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Order } from './entities/order.entity';
import { OrdersService } from './orders.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Order,
  },
  query: {
    alwaysPaginate: true,
  },
})
@ApiTags('orders')
@Controller('orders')
export class OrdersController implements CrudController<Order> {
  constructor(public service: OrdersService) {}
}
