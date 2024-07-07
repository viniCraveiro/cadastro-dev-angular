import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastrarDevComponent } from './pages/cadastrar-dev/cadastrar-dev.component';

export const routes: Routes = [
  {
    path: '', component: CadastrarDevComponent,
    children: [
      { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
      // { path: 'cadastrar-dev', component: CadastrarDevComponent },

    ],
  },
  {
    path: '**',
    component: AppComponent,
  }
];
