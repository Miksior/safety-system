import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/shared/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = `${environment.APIURL}/auth`;

  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, { username, password });
  }

  public logout(): void {
    localStorage.removeItem('access_token');
  }

  public isLoggedIn() {
    return !!localStorage.getItem('access_token');
  }
}
