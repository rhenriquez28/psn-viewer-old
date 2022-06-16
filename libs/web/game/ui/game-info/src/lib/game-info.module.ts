import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameInfoComponent } from './game-info.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GameInfoComponent],
  exports: [GameInfoComponent],
})
export class GameInfoModule {}
