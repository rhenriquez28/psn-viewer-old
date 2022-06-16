import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailsComponent } from './game-details.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GameDetailsComponent],
  exports: [GameDetailsComponent],
})
export class GameDetailsModule {}
