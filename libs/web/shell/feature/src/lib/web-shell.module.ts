import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@psn-viewer/web/shell/ui/layout';
import { webShellRoutes } from './web-shell.routes';

@NgModule({
  imports: [CommonModule, LayoutModule, RouterModule.forRoot(webShellRoutes)],
  exports: [RouterModule]
})
export class WebShellModule {}
