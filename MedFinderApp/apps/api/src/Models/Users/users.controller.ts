import { Body, Controller, Post, Get, Param} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./DTO/create-user.dto";
import { AuthUserDto } from "./DTO/auth-user.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('signup')
    create(@Body() createUserDto: CreateUserDto){
        return this.usersService.create(createUserDto);

         // Process the received form data here (e.g., save to the database)
         //console.log('Received signup data:', createUserDto);
         // You can return a response or perform additional actions based on your requirements
         //return { message: 'Signup successful' };
    }

    @Post('auth')
    auth(@Body() authUserDto: AuthUserDto){

        return this.usersService.auth(authUserDto);

         // Process the received form data here (e.g., save to the database)
         //console.log('Received login data:', authUserDto);
         // You can return a response or perform additional actions based on your requirements
         //return { message: 'Login successful' };
    }

    @Get(':id')
    show(@Param('id') id: string){
        console.log('Received id:', id);
        return this.usersService.showById(+id);
    }
}
