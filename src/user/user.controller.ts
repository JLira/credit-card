import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('JWT')
@Controller('user')
export class UserController {
  
  @Get()
  getHello(): string {
    return 'Olá usuario';
  }
}
