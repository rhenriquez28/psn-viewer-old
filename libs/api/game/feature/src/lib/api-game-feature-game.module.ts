import { Module } from '@nestjs/common';
import { GameController } from './api-game-feature-game.controller';

@Module({
  controllers: [GameController],
})
export class GameModule {}
