import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    username: string;
    email: string;
    password: string;
    registerDate: Date;
    hashPassword(): Promise<void>;
    validatePassword(password: string): Promise<boolean>;
}
