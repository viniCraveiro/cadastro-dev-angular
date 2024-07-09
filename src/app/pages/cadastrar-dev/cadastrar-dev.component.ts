import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { InputGroupDirective } from '../../common/directives/input/input-group.directive';
import { CardDevComponent } from '../../components/card-dev/card-dev.component';
import { TopbarComponent } from '../../layout/topbar/topbar.component';
import { TDev } from './cadastrar-dev.model';
import { CadastrarDevService } from './service/cadastrar-dev.service';
import { cadastrarDevActions } from './state/cadastrar-dev.actions';
import { devsSelector } from './state/cadastrar-dev.selectors';

@Component({
  selector: 'app-cadastrar-dev',
  standalone: true,
  imports: [
    TopbarComponent,
    InputGroupDirective,
    CardDevComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './cadastrar-dev.component.html',
  styleUrl: './cadastrar-dev.component.scss'
})
export class CadastrarDevComponent implements OnInit {

  form = new FormGroup({
    userGithub: new FormControl(''),
    avatarURL: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    city: new FormControl(''),
    formation: new FormControl(''),
    technologies: new FormArray([]),
  });

  devs: TDev[] = [];

  cadastrarDevService = inject(CadastrarDevService);
  store = inject(Store);

  devs$ = this.store.select(devsSelector);

  ngOnInit(): void {
    this.store.dispatch(cadastrarDevActions.loadDevs());
    this.getAllDevs();
  }

  getAllDevs() {
    this.devs$
      .subscribe({
        next: (devs) => {
          console.log('value:', devs);
          this.devs = devs;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  registerDev() {
    this.store.dispatch(cadastrarDevActions.registerDev(this.form.getRawValue()));
  }

  removeDev(id: string) {
    this.store.dispatch(cadastrarDevActions.removeDev({ id }));
  }

  editDev(dev: TDev) {
    this.store.dispatch(cadastrarDevActions.editDev(dev));
  }

}
