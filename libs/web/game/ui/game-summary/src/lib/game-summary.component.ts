import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'psnv-game-summary',
  templateUrl: './game-summary.component.html',
  styleUrls: ['./game-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameSummaryComponent {}
