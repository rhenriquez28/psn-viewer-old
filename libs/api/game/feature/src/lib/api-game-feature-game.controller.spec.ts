import { Test } from '@nestjs/testing';
import { GameController } from './api-game-feature-game.controller';
import { ApiGameFeatureGameService } from './api-game-feature-game.service';

describe('ApiGameFeatureGameController', () => {
  let controller: GameController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiGameFeatureGameService],
      controllers: [GameController],
    }).compile();

    controller = module.get(GameController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
