import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TrophyCardModule } from '@psn-viewer/web/game/ui/trophy-card';
import { GameTrophiesComponent } from './game-trophies.component';

@NgModule({
  imports: [CommonModule, TrophyCardModule],
  declarations: [GameTrophiesComponent],
  exports: [GameTrophiesComponent],
})
export class GameTrophiesModule {}
