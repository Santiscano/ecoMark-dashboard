import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: '**',
      loadComponent: () => import('./modules/test/test-starter/test-starter.component')
  }
];
