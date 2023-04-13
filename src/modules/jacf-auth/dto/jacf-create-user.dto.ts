import { IsBoolean, IsEmail, IsIn, IsString, Matches, MaxLength, MinLength } from "class-validator";
export class JacfCreateUserDto {

@IsString()
idea: string;

@IsString()
email: string;

@IsString()
nombre: string;

@IsString()
password: string;



@IsIn(['usuario', 'profesor', 'coordinador Tic', 'administrador'])
rol: string = 'profesor';

}