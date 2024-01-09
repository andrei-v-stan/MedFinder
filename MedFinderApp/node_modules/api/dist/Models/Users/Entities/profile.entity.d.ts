import { BaseEntity } from 'typeorm';
export declare class Profile extends BaseEntity {
    id: number;
    nickname: string;
    birthday: Date;
    weight: number;
    height: number;
    gender: string;
    userId: number;
}
