import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";
export class JacfCreateUserDto {

@IsString()
idea: string;

@IsString()
email: string;

@IsString()
rol: string;

@IsString()
nombre: string;

@IsString()
password: string;

}