import { Test } from '@nestjs/testing';
import { ApiUserFeatureUserController } from './api-user-feature-user.controller';

describe('ApiUserFeatureUserController', () => {
  let controller: ApiUserFeatureUserController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiUserFeatureUserController],
    }).compile();

    controller = module.get(ApiUserFeatureUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
