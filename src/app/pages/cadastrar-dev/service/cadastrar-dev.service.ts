import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TDev } from '../cadastrar-dev.model';

@Injectable({
  providedIn: 'root'
})
export class CadastrarDevService {

  readonly BASE_URL = 'http://localhost:3000';

  constructor(protected http: HttpClient) { }

  listAll() {
    return this.http.get<TDev[]>(`${this.BASE_URL}/users`);
  }
}
