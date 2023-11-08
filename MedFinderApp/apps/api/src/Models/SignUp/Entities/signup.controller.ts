import { SignUpInterface } from "../Interfaces/signup.interface";

export class SignUpController implements SignUpInterface {
    username: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: Date;
    gender: string;
    height: number;
    weight: number;

    constructor(username: string, email: string, confirmEmail: string, password: string, confirmPassword: string,
        dateOfBirth: Date, gender: string, height: number, weight: number) {
            this.username = username;
            this.email = email;
            this.confirmEmail = confirmEmail;
            this.password = password;
            this.confirmPassword = confirmPassword;
            this.dateOfBirth = dateOfBirth;
            this.gender = gender;
            this.height = height;
            this.weight = weight;
    }

    checkEmailConfirmation() {
        
    }

}
