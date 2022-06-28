import { Test } from '@nestjs/testing';
import { AuthController } from './api-auth-feature-auth.controller';
import { ApiAuthFeatureAuthService } from './api-auth-feature-auth.service';

describe('ApiAuthFeatureAuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiAuthFeatureAuthService],
      controllers: [AuthController],
    }).compile();

    controller = module.get(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
