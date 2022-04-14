import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//TODO Verificar a solicitação no ato do login
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  cpf: string;
}
