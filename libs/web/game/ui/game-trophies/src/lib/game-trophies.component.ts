import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'psnv-game-trophies',
  templateUrl: './game-trophies.component.html',
  styleUrls: ['./game-trophies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameTrophiesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
