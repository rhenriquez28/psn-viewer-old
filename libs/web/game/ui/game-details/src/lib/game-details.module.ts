import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameMediaModule } from '@psn-viewer/web/game/ui/game-media';
import { GameDetailsComponent } from './game-details.component';

@NgModule({
  imports: [CommonModule, GameMediaModule],
  declarations: [GameDetailsComponent],
  exports: [GameDetailsComponent],
})
export class GameDetailsModule {}
