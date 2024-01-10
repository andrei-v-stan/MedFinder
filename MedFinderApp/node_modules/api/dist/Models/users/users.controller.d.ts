import { UsersService } from "./users.service";
import { CreateUserDto } from "./DTO/create-user.dto";
import { AuthUserDto } from "./DTO/auth-user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<"Please, confirm email" | "Please, confirm password" | "success">;
    auth(authUserDto: AuthUserDto): Promise<string>;
    show(id: string): Promise<import("./Entities/user.entity").User>;
    showProfile(id: string): Promise<import("./Entities/profile.entity").Profile>;
}
