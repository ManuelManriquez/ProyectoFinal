import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { FilesService } from './files.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public pathApi: string = 'https://manmanesp.com';

  auth = '/api/auth/login';

  constructor(private http: HttpClient, private router: Router, filesService: FilesService) {
  }

  login(email: string, password: string) {
    this.http.post(this.pathApi + this.auth,  { email: email, password: password })
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