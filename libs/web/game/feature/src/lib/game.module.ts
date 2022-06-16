import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameDetailsModule } from '@psn-viewer/web/game/ui/game-details';
import { GameSummaryModule } from '@psn-viewer/web/game/ui/game-summary';
import { GameTrophiesModule } from '@psn-viewer/web/game/ui/game-trophies';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { GameComponent } from './game.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: ':gameName', component: GameComponent }]),
    GameSummaryModule,
    NzTabsModule,
    GameDetailsModule,
    GameTrophiesModule,
  ],
  declarations: [GameComponent],
  exports: [GameComponent],
})
export class GameModule {}
