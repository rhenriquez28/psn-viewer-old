import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterModule } from '@psn-viewer/web/shell/ui/footer';
import { TopBarModule } from '@psn-viewer/web/shell/ui/top-bar';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, TopBarModule, FooterModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
