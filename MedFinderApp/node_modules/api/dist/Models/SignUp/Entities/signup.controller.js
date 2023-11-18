"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpController = void 0;
class SignUpController {
    constructor(username, email, confirmEmail, password, confirmPassword, dateOfBirth, gender, height, weight) {
        this.username = username;
        this.email = email;
        this.confirmEmail = confirmEmail;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    }
    checkEmailConfirmation() {
        if (this.email == this.confirmEmail) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.SignUpController = SignUpController;
//# sourceMappingURL=signup.controller.js.map