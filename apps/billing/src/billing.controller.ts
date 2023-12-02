import { Controller } from '@nestjs/common';
import { BillingService } from './billing.service';
import { EventPattern, Payload, RmqContext, Ctx } from '@nestjs/microservices';
import { RmqService } from '@app/common';

@Controller()
export class BillingController {
  constructor(
    private readonly billingService: BillingService,
    private readonly rmqService: RmqService,
  ) {}

  @EventPattern('order_created')
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(`Received message in BillingService:`);

    this.billingService.bill(data);
    this.rmqService.ack(context);
  }
}
