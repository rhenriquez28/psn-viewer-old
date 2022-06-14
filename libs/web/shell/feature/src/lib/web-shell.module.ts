import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconModule } from '@psn-viewer/web/shared/ui/icon';
import { LayoutModule } from '@psn-viewer/web/shell/ui/layout';
import { webShellRoutes } from './web-shell.routes';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    LayoutModule,
    RouterModule.forRoot(webShellRoutes),
  ],
  exports: [RouterModule],
})
export class WebShellModule {}
