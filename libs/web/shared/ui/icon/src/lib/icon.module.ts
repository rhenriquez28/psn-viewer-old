import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { psnvTrophyIcon } from './svg/trophy';

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      icons: [psnvTrophyIcon],
    }),
  ],
  exports: [SvgIconsModule],
})
export class IconModule {}
