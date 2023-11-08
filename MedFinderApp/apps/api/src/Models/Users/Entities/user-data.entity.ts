import { UserDataInt } from "../Interfaces/user-data.interface";

export class UserData implements UserDataInt {
    sex: string;
    dateOfBirth: Date;
    height: number;
    weight: number;

    constructor(sex: string, dateOfBirth: Date, height: number, weight: number) {
        this.sex = sex;
        this.dateOfBirth = dateOfBirth;
        this.height = height;
        this.weight = weight;
    }

}
