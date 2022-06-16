import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameTrophiesComponent } from './game-trophies.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GameTrophiesComponent],
  exports: [GameTrophiesComponent],
})
export class GameTrophiesModule {}
