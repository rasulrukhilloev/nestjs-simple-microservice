import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Order } from './schemas/orders.schema';

@Injectable()
export class OrdersRepositoy extends AbstractRepository<Order> {
  protected readonly logger = new Logger(OrdersRepositoy.name);
  constructor(
    @InjectModel(Order.name) orderModel: Model<Order>,
    @InjectConnection() connection: Connection,
  ) {
    super(orderModel, connection);
  }
}
