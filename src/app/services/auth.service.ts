import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  api = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) {
  }

  login(email: string, password: string) {
    this.http.post(this.api + '/auth/login', { email: email, password: password })
      .subscribe((resp: any) => {
        localStorage.setItem('auth_token', resp.token);
        this.nav('/galery');
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.nav('/login');

  }

  nav(pathNav: string) {
    this.router.navigate([pathNav]);
  }

  public get logInStatus(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }
}