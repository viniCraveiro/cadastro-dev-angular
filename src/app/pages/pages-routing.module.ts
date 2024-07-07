import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarDevComponent } from './cadastrar-dev/cadastrar-dev.component';

const routes: Routes = [
  { path: 'cadastrar-dev', component: CadastrarDevComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
