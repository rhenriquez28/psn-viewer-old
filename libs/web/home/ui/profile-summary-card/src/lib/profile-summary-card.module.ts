import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSummaryCardComponent } from './profile-summary-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProfileSummaryCardComponent],
  exports: [ProfileSummaryCardComponent],
})
export class ProfileSummaryCardModule {}
