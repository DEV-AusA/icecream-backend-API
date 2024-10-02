import { Transform, Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsString, Matches, MaxLength } from "class-validator";

export class CreateSalsaDto {

    @Transform(({ value }) => value.toString().toLowerCase())
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @Matches(/^[A-Za-zÀ-ÿ0-9 ,\/!-.]+$/, {
      message: 'El nombre de la salsa solo debe contener letras, números, comas o espacios',
    })
    name: string;
  
    @Type(() => Boolean)
    @IsNotEmpty()
    @IsBoolean()
    state: boolean;
}
