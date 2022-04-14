import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import CreditCardRequestDTO from './types/credit-card-request.dto';

@ApiTags('Solicitação')
@Controller('credit-card')
export class CreditCardController {
  @Post()
  request(@Body() creditCardRequest: CreditCardRequestDTO) {
    console.log(creditCardRequest);
    return {
      approved: true,
    };
  }
}
