import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSummaryComponent } from './game-summary.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GameSummaryComponent],
  exports: [GameSummaryComponent],
})
export class GameSummaryModule {}
