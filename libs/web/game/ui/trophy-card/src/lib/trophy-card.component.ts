import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psnv-trophy-card',
  templateUrl: './trophy-card.component.html',
  styleUrls: ['./trophy-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrophyCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
