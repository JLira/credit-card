import { UserService } from './../user/user.service';
import { User } from './../user/user.entity';
import { Solicitation } from './solicitation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CreditCardController } from './credit-card.controller';
import { CreditCardService } from './credit-card.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Solicitation])],
  exports: [TypeOrmModule],
  controllers: [CreditCardController],
  providers: [CreditCardService, UserService],
})
export class CreditCardModule {}
