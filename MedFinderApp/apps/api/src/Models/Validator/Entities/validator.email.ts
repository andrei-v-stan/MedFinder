import { ValidatorInterface } from "../Interfaces/validator.interface";

export class EmailValidator implements ValidatorInterface {
    validate(input: string): boolean {
        //implement functionality
        return true;
    }

}
