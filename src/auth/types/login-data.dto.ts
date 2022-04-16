import { ApiProperty } from "@nestjs/swagger";

class LoginDataDTO {
  @ApiProperty({
    description: 'Dia no pagamento da fatura',
  })
  email: string;

  @ApiProperty({
    description: 'Dia no pagamento da fatura',
  })
  password: string;
}

export default LoginDataDTO;
