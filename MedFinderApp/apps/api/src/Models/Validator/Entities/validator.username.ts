import { ValidatorInterface } from "../Interfaces/validator.interface";

export class UsernameValidator implements ValidatorInterface {
    validate(input: string): boolean {
        //implement functionality
        return true;
    }

}
