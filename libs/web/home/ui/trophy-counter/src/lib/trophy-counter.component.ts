import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'psnv-trophy-counter',
  templateUrl: './trophy-counter.component.html',
  styleUrls: ['./trophy-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrophyCounterComponent {
  @Input() type!: 'all' | 'platinum' | 'gold' | 'silver' | 'bronze';
  @Input() count!: number;
}
