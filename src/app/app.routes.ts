import { Routes } from '@angular/router';
import { Portfolio } from '@pages/portfolio/portfolio';

export const routes: Routes = [
  {
    path: '',
    component: Portfolio
  },
  {
    path: '**',
    loadComponent: () => import('@pages/not-found/not-found')
  }
];
