"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./DTO/user.dto");
const profile_dto_1 = require("./DTO/profile.dto");
const user_entity_1 = require("./Entities/user.entity");
const profile_entity_1 = require("./Entities/profile.entity");
const bcrypt = require("bcryptjs");
let UsersService = class UsersService {
    async create(createUserDto) {
        if (createUserDto.email != createUserDto.confirmEmail) {
            return "Please, confirm email";
        }
        if (createUserDto.password != createUserDto.confirmPassword) {
            return "Please, confirm password";
        }
        const userDto = new user_dto_1.UserDto();
        userDto.setUsername(createUserDto.username);
        userDto.setEmail(createUserDto.email);
        userDto.setPassword(createUserDto.password);
        const user = user_entity_1.User.create(userDto);
        await user.save();
        delete user.password;
        const profileDto = new profile_dto_1.ProfileDto();
        profileDto.setNickname(createUserDto.nickname);
        profileDto.setBirthday(createUserDto.birthday);
        profileDto.setWeight(createUserDto.weight);
        profileDto.setHeight(createUserDto.height);
        profileDto.setGender(createUserDto.gender);
        profileDto.setUserId(user.id);
        const profile = profile_entity_1.Profile.create(profileDto);
        await profile.save();
        return "success";
    }
    async showById(id) {
        const user = await this.findById(id);
        delete user.password;
        return user;
    }
    async showByUserId(userId) {
        const profile = await this.findByUserId(userId);
        return profile;
    }
    async findById(id) {
        return await user_entity_1.User.findOne({
            where: {
                id: id
            }
        });
    }
    async findByEmail(email) {
        return await user_entity_1.User.findOne({
            where: {
                email: email
            }
        });
    }
    async findByUsername(username) {
        return await user_entity_1.User.findOne({
            where: {
                username: username
            }
        });
    }
    async findByUserId(userId) {
        return await profile_entity_1.Profile.findOne({
            where: {
                userId: userId
            }
        });
    }
    async findByLogin(login) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(login)) {
            return await this.findByEmail(login);
        }
        else {
            return await this.findByUsername(login);
        }
    }
    async auth(authUserDto) {
        console.log('Auth data in service', authUserDto);
        try {
            const user = await this.findByLogin(authUserDto.login);
            console.log('Find object', user);
            if (user && bcrypt.compareSync(authUserDto.password, user.password)) {
                return user.id.toString();
            }
            else {
                return "wrong";
            }
        }
        catch (error) {
            console.error('Error during authentication:', error);
            return "An error occurred during authentication";
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map