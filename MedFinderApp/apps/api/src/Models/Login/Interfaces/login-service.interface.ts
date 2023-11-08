import { UserInt } from '../../Users/Interfaces/users.interface';
import { LoginInt } from './login.interface';
import { LoginRespInt } from './login-resp.interface';

export interface LoginServiceInt {
  validateUser(username: string, pass: string): Promise<UserInt | null>;
  login(loginPayload: LoginInt): Promise<LoginRespInt>;
}
