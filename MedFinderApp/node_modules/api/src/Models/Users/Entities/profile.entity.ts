import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import { TABLE_NAMES } from 'src/Utils/constants';

@Entity({name: TABLE_NAMES.PROFILES})
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    nickname: string;

    @Column()
    birthday: Date;
    
    @Column()
    weight: number;

    @Column()
    height: number;

    @Column()
    gender: string;

    @Column({unique: true})
    userId: number;

}
