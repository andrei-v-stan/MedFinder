import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  it('it should be defined', () => {
    expect(usersService).toBeDefined();
  });
});
