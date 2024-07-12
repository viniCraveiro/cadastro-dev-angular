import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
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
  form!: FormGroup;
  devs: TDev[] = [];
  isEditing = false;
  submitted = false;

  cadastrarDevService = inject(CadastrarDevService);
  store = inject(Store);
  devs$ = this.store.select(devsSelector);
  toast = inject(ToastrService);

  ngOnInit(): void {
    this.form = new FormGroup({
      _id: new FormControl(''),
      userGithub: new FormControl({ value: null, disabled: true }),
      avatarURL: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl('', [Validators.required]),
      formation: new FormControl(''),
      technologies: new FormControl('', [Validators.required]),
    });

    this.getAllDevs();
  }



  getAllDevs() {
    this.store.dispatch(cadastrarDevActions.loadDevs());
    this.devs$
      .subscribe({
        next: (devs) => {
          this.devs = devs;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  saveDev() {
    this.submitted = true;
    if (!this.form.valid) return;
    if (this.isEditing) {
      this.store.dispatch(cadastrarDevActions.editDev(this.form.getRawValue()));
      this.resetForm();
    } else {
      this.store.dispatch(cadastrarDevActions.registerDev(this.form.getRawValue()));
      this.resetForm();
    }
  }

  removeDev(id: string) {
    this.store.dispatch(cadastrarDevActions.removeDev({ id }));
  }

  editDev(dev: TDev) {
    this.store.dispatch(cadastrarDevActions.editDev(dev));
  }

  onEditCard(card: TDev) {
    this.isEditing = true;
    this.form.patchValue(card);
  }

  onDeleteCard(card: TDev) {
    this.removeDev(card._id!);
  }

  control(control: string) {
    if (!this.form.controls[control]) return;
    return this.form.controls[control];
  }

  resetForm() {
    this.form.reset();
    this.submitted = false;
    this.isEditing = false;
  }

}
