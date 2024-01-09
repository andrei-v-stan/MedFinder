import { CreateUserDto } from './DTO/create-user.dto';
import { AuthUserDto } from './DTO/auth-user.dto';
import { User } from './Entities/user.entity';
export declare class UsersService {
    create(createUserDto: CreateUserDto): Promise<User>;
    showById(id: number): Promise<User>;
    findById(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findByUsername(username: string): Promise<User>;
    findByLogin(login: string): Promise<User>;
    auth(authUserDto: AuthUserDto): Promise<string>;
}
