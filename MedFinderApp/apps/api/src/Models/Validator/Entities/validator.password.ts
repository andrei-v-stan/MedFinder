import { ValidatorInterface } from "../Interfaces/validator.interface";

export class PasswordValidator implements ValidatorInterface {
    validate(input: string): boolean {
        //implement functionality
        return true;
    }

}
