import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GameMediaComponent } from './game-media.component';

@NgModule({
  imports: [CommonModule, GalleryModule, LightboxModule],
  declarations: [GameMediaComponent],
  exports: [GameMediaComponent],
})
export class GameMediaModule {}
