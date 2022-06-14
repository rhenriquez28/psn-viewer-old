import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TrophyCounterModule } from '@psn-viewer/web/home/ui/trophy-counter';
import { GameCardComponent } from './game-card.component';

@NgModule({
  imports: [CommonModule, TrophyCounterModule],
  declarations: [GameCardComponent],
  exports: [GameCardComponent],
})
export class GameCardModule {}
