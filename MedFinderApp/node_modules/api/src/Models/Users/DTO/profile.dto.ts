import { IsDate, IsEmail, IsNotEmpty, IsNumberString } from "class-validator";
import { Type } from 'class-transformer';


export class ProfileDto {

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

    @IsNotEmpty()
    userId: number;

    constructor() {}

    public setNickname(nickname: string): void {
        this.nickname = nickname;
    }

    public setBirthday(birthday: Date): void {
        this.birthday = birthday;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public setGender(gender: string): void {
        this.gender = gender;
    }

    public setUserId(userId: number): void {
        this.userId = userId;
    }
}