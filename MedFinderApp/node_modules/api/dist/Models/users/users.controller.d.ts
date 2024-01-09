import { UsersService } from "./users.service";
import { CreateUserDto } from "./DTO/create-user.dto";
import { AuthUserDto } from "./DTO/auth-user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./Entities/user.entity").User>;
    auth(authUserDto: AuthUserDto): Promise<string>;
    show(id: string): Promise<import("./Entities/user.entity").User>;
}
