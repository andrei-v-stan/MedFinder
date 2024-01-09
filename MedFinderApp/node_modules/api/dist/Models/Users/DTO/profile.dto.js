"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ProfileDto {
    constructor() { }
    setNickname(nickname) {
        this.nickname = nickname;
    }
    setBirthday(birthday) {
        this.birthday = birthday;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    setHeight(height) {
        this.height = height;
    }
    setGender(gender) {
        this.gender = gender;
    }
    setUserId(userId) {
        this.userId = userId;
    }
}
exports.ProfileDto = ProfileDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "nickname", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ProfileDto.prototype, "birthday", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], ProfileDto.prototype, "weight", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], ProfileDto.prototype, "height", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProfileDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ProfileDto.prototype, "userId", void 0);
//# sourceMappingURL=profile.dto.js.map