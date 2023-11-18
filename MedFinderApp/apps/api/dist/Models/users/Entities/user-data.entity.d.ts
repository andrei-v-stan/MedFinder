import { UserDataInt } from "../Interfaces/user-data.interface";
export declare class UserProfile implements UserDataInt {
    sex: string;
    dateOfBirth: Date;
    height: number;
    weight: number;
    constructor(sex: string, dateOfBirth: Date, height: number, weight: number);
}
