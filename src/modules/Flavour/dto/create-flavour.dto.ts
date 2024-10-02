import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsString, Matches, MaxLength } from 'class-validator';

export class CreateFlavourDto {
  @Transform(({ value }) => value.toString().toLowerCase())
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @Matches(/^[A-Za-zÀ-ÿ0-9 ,\/!-.]+$/, {
    message: 'Sabor debe contener solo letras (incluyendo tildes), números, comas, espacios, /, !, - y .',
  })  
  name: string;

  @Type(() => Boolean)
  @IsNotEmpty()
  @IsBoolean()
  state: boolean;
}
