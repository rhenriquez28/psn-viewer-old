import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameSummaryComponent } from './game-summary.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GameSummaryComponent],
  exports: [GameSummaryComponent],
})
export class GameSummaryModule {}
