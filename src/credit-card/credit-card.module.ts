import { Module } from '@nestjs/common';
import { CreditCardController } from './credit-card.controller';

@Module({
  controllers: [CreditCardController],
})
export class CreditCardModule {}
