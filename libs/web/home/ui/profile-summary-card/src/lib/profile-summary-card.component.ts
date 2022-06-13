import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'psnv-profile-summary-card',
  templateUrl: './profile-summary-card.component.html',
  styleUrls: ['./profile-summary-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSummaryCardComponent {}
