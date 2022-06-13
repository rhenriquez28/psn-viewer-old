import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameSummaryModule } from '@psn-viewer/web/game/ui/game-summary';
import { GameComponent } from './game.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: GameComponent }]),
    GameSummaryModule,
  ],
  declarations: [GameComponent],
  exports: [GameComponent],
})
export class GameModule {}
