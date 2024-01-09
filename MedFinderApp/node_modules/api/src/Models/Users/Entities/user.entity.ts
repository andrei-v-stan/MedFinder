import {BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import { TABLE_NAMES } from 'src/Utils/constants';

import * as bcrypt from 'bcryptjs';
@Entity({name: TABLE_NAMES.USERS})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    @UpdateDateColumn()
    registerDate: Date;
    
    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 8);
    }

    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}
