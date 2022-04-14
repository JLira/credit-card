import { User } from './../user/user.entity';
import { Solicitation } from './solicitation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CreditCardController } from './credit-card.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User,Solicitation])],
  exports: [TypeOrmModule],

  controllers: [CreditCardController],
})
export class CreditCardModule {}
