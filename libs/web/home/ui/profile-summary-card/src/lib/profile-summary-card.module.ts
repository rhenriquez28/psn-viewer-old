import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TrophyCounterModule } from '@psn-viewer/web/home/ui/trophy-counter';
import { ProfileSummaryCardComponent } from './profile-summary-card.component';

@NgModule({
  imports: [CommonModule, SvgIconsModule, TrophyCounterModule],
  declarations: [ProfileSummaryCardComponent],
  exports: [ProfileSummaryCardComponent],
})
export class ProfileSummaryCardModule {}
