import { UserDataInt } from "../Interfaces/user-data.interface";
import { UserInt } from "../Interfaces/users.interface";

export class UserCredentials implements UserInt {
    id: number;
    username: string;
    password: string;
    userData: UserDataInt;

    constructor(username: string, password: string, userData: UserDataInt) {
        this.username = username;
        this.password = password;
        this.userData = userData;
    }

    getAge() {
        
    }

}
