import { UsersService } from '../users/users.service';
export declare class LoginService {
    private usersService;
    constructor(usersService: UsersService);
    signIn(username: string, pass: string): Promise<any>;
}
