import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'pages/cadastrar-dev', pathMatch: 'full',
  },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
];
