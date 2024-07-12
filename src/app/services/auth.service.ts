import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGitHubDataUser } from '../pages/cadastrar-dev/cadastrar-dev.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) { }

  getLinkCodeClientId(): Observable<{ link: string; }> {
    return this.http.get<{ link: string; }>(`${this.apiUrl}/client-id`);
  }

  getAccessToken(code: string): Observable<{ access_token: string; }> {
    return this.http.get<{ access_token: string; }>(`${this.apiUrl}/callback`, { params: { code } });
  }

  getUserData(token: string): Observable<IGitHubDataUser> {
    return this.http.get<IGitHubDataUser>(`${this.apiUrl}/user`, { params: { token } });
  }
}
