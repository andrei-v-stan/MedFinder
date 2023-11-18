import { LoginService } from './login.service';
export declare class LoginController {
    private authService;
    constructor(authService: LoginService);
    signIn(signInDto: Record<string, any>): Promise<any>;
}
