import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'psnv-trophy-card',
  templateUrl: './trophy-card.component.html',
  styleUrls: ['./trophy-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrophyCardComponent {
  @Input() type!: 'platinum' | 'gold' | 'silver' | 'bronze';
  @Input() earned!: boolean;
}
