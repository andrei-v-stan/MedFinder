import { IsNotEmpty } from "class-validator";


export class AuthUserDto {
    @IsNotEmpty()
    login: string;

    @IsNotEmpty()
    password: string;

}