import { CreateUserDto } from './DTO/create-user.dto';
import { AuthUserDto } from './DTO/auth-user.dto';
import { User } from './Entities/user.entity';
import { Profile } from './Entities/profile.entity';
export declare class UsersService {
    create(createUserDto: CreateUserDto): Promise<"Please, confirm email" | "Please, confirm password" | "success">;
    showById(id: number): Promise<User>;
    showByUserId(userId: number): Promise<Profile>;
    findById(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findByUsername(username: string): Promise<User>;
    findByUserId(userId: number): Promise<Profile>;
    findByLogin(login: string): Promise<User>;
    auth(authUserDto: AuthUserDto): Promise<string>;
}
