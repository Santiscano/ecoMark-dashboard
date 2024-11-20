import { Routes } from '@angular/router';

import { LayoutComponent } from '@app/layout/layout.component';

export const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    component: LayoutComponent,
  },
  {
    path: '**',
      loadComponent: () => import('./modules/test/test-starter/test-starter.component')
  }
];
