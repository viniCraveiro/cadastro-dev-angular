import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGitHubDataUser, TDev } from '../cadastrar-dev.model';

@Injectable({
  providedIn: 'root'
})
export class CadastrarDevService {

  readonly BASE_URL = 'http://localhost:3000';
  readonly API_GITHUB_URL = 'https://api.github.com/users';

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
    return this.http.get<IGitHubDataUser>(`${this.API_GITHUB_URL}/${username}`);
  }

  search(username: string) {
    return this.http.get<TDev[]>(`${this.BASE_URL}/users/search/name`, { params: { name: username } });
  }


}
