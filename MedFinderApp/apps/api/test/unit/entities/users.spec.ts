import { UserCredentials } from './../../../src/Models/Users/Entities/users.entity';
import { UserProfile } from './../../../src/Models/Users/Entities/user-data.entity';

const SUT ={
    user: {
        username: 'andreistan',
        password: '1357',
        sex: 'M',
        dateOfBirth: new Date("2000-06-27"),
        height: 196,
        weight: 125
    }
}

describe('User', ()=>{
    it('This should create a User instance', () => {
        const userData = new UserProfile(SUT.user.sex,SUT.user.dateOfBirth,SUT.user.height,SUT.user.weight)
        const user = new UserCredentials(SUT.user.username,SUT.user.password,userData)
        
        expect(user).toBeInstanceOf(UserCredentials);
        expect(user.username).toBe(SUT.user.username);
        expect(user.password).toBe(SUT.user.password);

        expect(userData).toBeInstanceOf(UserProfile);
        expect(userData.sex).toBe(SUT.user.sex);
        expect(userData.dateOfBirth).toBe(SUT.user.dateOfBirth);
        expect(userData.height).toBe(SUT.user.height);
        expect(userData.weight).toBe(SUT.user.weight);
    });

    it('This should calculate the age of a user', () => {
        const userData = new UserProfile(SUT.user.sex,SUT.user.dateOfBirth,SUT.user.height,SUT.user.weight)
        const user = new UserCredentials(SUT.user.username,SUT.user.password,userData)

        var age = user.getAge();
    });
});

