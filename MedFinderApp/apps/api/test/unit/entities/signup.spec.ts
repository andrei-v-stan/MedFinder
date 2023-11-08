import { SignUpController } from './../../../src/Models/SignUp/Entities/signup.controller';

const SUT ={
    user: {
        username: 'johndoe',
        email: 'johndoe@gmail.com',
        confirmEmail: 'johndoe1@gmail.com',
        password: 'qwertyqaz',
        confirmPassword: 'qwertyqaz',
        dateOfBirth: new Date("1997-06-27"),
        gender: 'M',
        height: 167,
        weight: 79
    }
}

describe('SignUpController', ()=>{
    it('This should create a SignUpController instance', () => {
        const signUpController = new SignUpController(SUT.user.username,SUT.user.email, SUT.user.confirmEmail, 
            SUT.user.password,SUT.user.confirmPassword,SUT.user.dateOfBirth,SUT.user.gender,SUT.user.height,SUT.user.weight)
        
        expect(signUpController).toBeInstanceOf(SignUpController);
        expect(signUpController.username).toBe(SUT.user.username);
        expect(signUpController.email).toBe(SUT.user.email);
        expect(signUpController.confirmEmail).toBe(SUT.user.confirmEmail);
        expect(signUpController.password).toBe(SUT.user.password);
        expect(signUpController.confirmPassword).toBe(SUT.user.confirmPassword);
        expect(signUpController.gender).toBe(SUT.user.gender);
        expect(signUpController.dateOfBirth).toBe(SUT.user.dateOfBirth);
        expect(signUpController.height).toBe(SUT.user.height);
        expect(signUpController.weight).toBe(SUT.user.weight);
    });

    it('This should check if email is equal to confirmEmail', () => {
        const signUpController = new SignUpController(SUT.user.username,SUT.user.email, SUT.user.confirmEmail, 
            SUT.user.password,SUT.user.confirmPassword,SUT.user.dateOfBirth,SUT.user.gender,SUT.user.height,SUT.user.weight)

        var emailConfirmed = signUpController.checkEmailConfirmation();
    });

});

