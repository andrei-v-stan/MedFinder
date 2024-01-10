import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './DTO/create-user.dto';
import { UserDto } from './DTO/user.dto';
import { ProfileDto } from './DTO/profile.dto';
import { AuthUserDto } from './DTO/auth-user.dto';
import { User } from './Entities/user.entity';
import { Profile } from './Entities/profile.entity';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UsersService {

    async create(createUserDto: CreateUserDto){
        
        //Confirm email
        if(createUserDto.email != createUserDto.confirmEmail) {
            return "Please, confirm email";
        }

        //Confirm password
        if(createUserDto.password != createUserDto.confirmPassword) {
            return "Please, confirm password";
        }

        const userDto = new UserDto();
        userDto.setUsername(createUserDto.username);
        userDto.setEmail(createUserDto.email);
        userDto.setPassword(createUserDto.password);

        const user = User.create(userDto);
        await user.save();

        delete user.password;

        const profileDto = new ProfileDto();
        profileDto.setNickname(createUserDto.nickname);
        profileDto.setBirthday(createUserDto.birthday);
        profileDto.setWeight(createUserDto.weight);
        profileDto.setHeight(createUserDto.height);
        profileDto.setGender(createUserDto.gender);
        profileDto.setUserId(user.id);

        const profile = Profile.create(profileDto);
        await profile.save();

        return "success"; //used key
    }

    async showById(id: number): Promise<User> {
        const user = await this.findById(id);

        delete user.password;
        return user;
    }

    async showByUserId(userId: number): Promise<Profile> {
        const profile = await this.findByUserId(userId);

        return profile;
    }

    async findById(id: number) {
        return await User.findOne({
            where: {
                id: id
            }
        });
    }

    async findByEmail(email: string) {
        return await User.findOne({
            where: {
                email: email
            }
        });
    }

    async findByUsername(username: string) {
        return await User.findOne({
            where: {
                username: username
            }
        });
    }

    async findByUserId(userId: number) {
        return await Profile.findOne({
            where: {
                userId: userId
            }
        });
    }

    async findByLogin(login: string) {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(login)){
            return await this.findByEmail(login);
        }else{
            return await this.findByUsername(login);
        }
    }

    async auth(authUserDto: AuthUserDto) {
        console.log('Auth data in service', authUserDto);
      
        try {
            const user = await this.findByLogin(authUserDto.login);
        
            console.log('Find object', user);
        
            if (user && bcrypt.compareSync(authUserDto.password, user.password)) {      
                return user.id.toString();
            } else {
                return "wrong"; //used key
            }
        } catch (error) {
          console.error('Error during authentication:', error);
          return "An error occurred during authentication";
        }
    }
      

}
