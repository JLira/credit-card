import { IsPublic } from './../auth/is-public.decorator';
import { Body, Controller, Post } from '@nestjs/common';
import { Solicitation } from './solicitation.entity';
import { CreditCardService } from './credit-card.service';
import { ApiTags } from '@nestjs/swagger';
import CreditCardRequestDTO from './types/credit-card-request.dto';

@IsPublic()
@ApiTags('Solicitation')
@Controller('credit-card')
export class CreditCardController {
  constructor(private CreditCardService: CreditCardService) { }

  @Post('request')
  async request(@Body() creditCardRequest: CreditCardRequestDTO) {
    console.log(creditCardRequest);

    const approved = await this.CreditCardService.createSolicitation(
      creditCardRequest,
    );

    return {
      approved,
    };
  }
}
