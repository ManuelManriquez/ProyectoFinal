import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  api = 'http://localhost:8080/api';
  token: any;

  public resultados: any[] = [];

  constructor(private http: HttpClient, private router: Router) {
  }

  login(email: string, password: string) {
    this.http.post(this.api + '/auth/login', { email: email, password: password })
      .subscribe((resp: any) => {
        localStorage.setItem('auth_token', resp.token);
      this.router.navigate(['/galery']);
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);

  }

  public get logInStatus(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }
}