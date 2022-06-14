import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameCardModule } from '@psn-viewer/web/home/ui/game-card';
import { ProfileSummaryCardModule } from '@psn-viewer/web/home/ui/profile-summary-card';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
    ProfileSummaryCardModule,
    GameCardModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
