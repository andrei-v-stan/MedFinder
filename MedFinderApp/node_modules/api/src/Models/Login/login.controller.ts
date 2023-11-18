import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private authService: LoginService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}