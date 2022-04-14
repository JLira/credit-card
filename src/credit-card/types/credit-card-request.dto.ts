import { ApiProperty } from '@nestjs/swagger';

class CreditCardRequestDTO {
  @ApiProperty({description:'Dia no pagamento da fatura',})
  preferredDueDay: number;

  @ApiProperty({description:'Nome do usuário',})
  name: string;

  @ApiProperty({description:'Email do usuario, usado para login',})
  email: string;

  @ApiProperty({description:'Senha utilizada para login',})
  password: string;

  @ApiProperty({description:'CPF do usuário',})
  cpf: string;
}
export default CreditCardRequestDTO;
