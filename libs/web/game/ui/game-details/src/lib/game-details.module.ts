import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameInfoModule } from '@psn-viewer/web/game/ui/game-info';
import { GameMediaModule } from '@psn-viewer/web/game/ui/game-media';
import { GameDetailsComponent } from './game-details.component';

@NgModule({
  imports: [CommonModule, GameMediaModule, GameInfoModule],
  declarations: [GameDetailsComponent],
  exports: [GameDetailsComponent],
})
export class GameDetailsModule {}
