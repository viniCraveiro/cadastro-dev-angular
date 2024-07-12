import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TDev } from '../cadastrar-dev.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastrarDevService {

  readonly BASE_URL = 'http://localhost:3000';
  private apiUrl = 'https://api.github.com/users';

  constructor(protected http: HttpClient) { }

  listAll() {
    return this.http.get<TDev[]>(`${this.BASE_URL}/users`);
  }

  save(dev: TDev) {
    return this.http.post<TDev>(`${this.BASE_URL}/users`, dev);
  }

  update(dev: TDev) {
    return this.http.patch<TDev>(`${this.BASE_URL}/users/${dev._id}`, dev);
  }

  delete(id: string) {
    return this.http.delete<TDev>(`${this.BASE_URL}/users/${id}`);
  }

  findById(id: string) {
    return this.http.get<TDev>(`${this.BASE_URL}/users/${id}`);
  }

  getUser(username: string): Observable<IGitHubDataUser> {
    return this.http.get<IGitHubDataUser>(`${this.apiUrl}/${username}`);
  }
}

export interface IGitHubDataUser {
  login: string,
  avatar_url: string,
  html_url: string,
  name: string,
  location: string,
  email: string,
}
