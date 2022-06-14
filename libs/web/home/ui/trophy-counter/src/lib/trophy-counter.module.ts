import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TrophyCounterComponent } from './trophy-counter.component';

@NgModule({
  imports: [CommonModule, SvgIconsModule],
  declarations: [TrophyCounterComponent],
  exports: [TrophyCounterComponent],
})
export class TrophyCounterModule {}
