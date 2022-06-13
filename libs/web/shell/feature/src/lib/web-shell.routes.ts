import { Routes } from '@angular/router';
import { LayoutComponent } from '@psn-viewer/web/shell/ui/layout';

export const webShellRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'game',
        loadChildren: async () =>
          (await import('@psn-viewer/web/game/feature')).GameModule,
      },
    ],
  },
];
