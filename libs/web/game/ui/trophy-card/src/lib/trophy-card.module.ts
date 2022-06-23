import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrophyCardComponent } from './trophy-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TrophyCardComponent],
  exports: [TrophyCardComponent],
})
export class TrophyCardModule {}
