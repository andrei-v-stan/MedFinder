import { IsDate, IsEmail, IsNotEmpty } from "class-validator";
import { Type } from 'class-transformer';


export class UserDto {
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    constructor() {}

    public setUsername(username: string): void {
        this.username = username;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setPassword(password: string): void {
        this.password = password;
    }
    
}