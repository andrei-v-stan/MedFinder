import { IsDate, IsEmail, IsNotEmpty, IsNumberString } from "class-validator";
import { Type } from 'class-transformer';


export class CreateUserDto {
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;

    @IsEmail()
    confirmEmail: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    confirmPassword: string;

    @IsNotEmpty()
    nickname: string;

    @Type(() => Date)
    @IsDate()
    birthday: Date;

    @IsNumberString()
    weight: number;

    @IsNumberString()
    height: number;

    @IsNotEmpty()
    gender: string;

}