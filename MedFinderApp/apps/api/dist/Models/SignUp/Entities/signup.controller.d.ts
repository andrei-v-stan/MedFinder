import { SignUpInterface } from "../Interfaces/signup.interface";
export declare class SignUpController implements SignUpInterface {
    username: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: Date;
    gender: string;
    height: number;
    weight: number;
    constructor(username: string, email: string, confirmEmail: string, password: string, confirmPassword: string, dateOfBirth: Date, gender: string, height: number, weight: number);
    checkEmailConfirmation(): boolean;
}
