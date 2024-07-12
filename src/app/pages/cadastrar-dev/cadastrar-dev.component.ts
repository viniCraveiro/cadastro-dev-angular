import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { InputGroupDirective } from '../../common/directives/input/input-group.directive';
import { CardDevComponent } from '../../components/card-dev/card-dev.component';
import { TopbarComponent } from '../../layout/topbar/topbar.component';
import { AuthService } from '../../services/auth.service';
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
  token = '';

  cadastrarDevService = inject(CadastrarDevService);
  store = inject(Store);
  devs$ = this.store.select(devsSelector);
  router = inject(ActivatedRoute);
  authService = inject(AuthService);

  ngOnInit(): void {

    this.router.queryParams.subscribe((params) => {
      if (params['code']) {
        const code = params['code'];
        this.getAccessTokenGithub(code);
      }
    });

    this.form = new FormGroup({
      _id: new FormControl(null),
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

  getAccessTokenGithub(code: string) {
    this.authService.getAccessToken(code).subscribe({
      next: (response) => {
        this.token = response.access_token;
        if (this.token) {
          this.getUserData(this.token);
        }
      },
      error: (error) => {
        console.error('Erro ao recuperar token: ', error);
      }
    });
  }

  getUserData(token: string) {
    this.authService.getUserData(token).subscribe({
      next: (data) => {
        const { login, avatar_url, name, email } = data;
        const dataForm = {
          userGithub: login,
          avatarURL: avatar_url,
          name: name,
          email: email
        };
        this.form.patchValue(dataForm);
      },
      error: (error) => {
        console.error('Erro ao buscar dados do usuario:', error);
      }
    });
  }

  openGitHub() {
    this.authService.getLinkCodeClientId().subscribe({
      next: (value) => {
        window.open(value.link, '_self');
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

}
