import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginFormDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Length(8, 20)
  @IsNotEmpty()
  password: string;
}
