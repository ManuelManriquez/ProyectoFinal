import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { FilesService } from './files.service';
import { Users } from '../interfaces/users';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public pathApi: string = 'https://manmanesp.com';

  // authToken: string = localStorage.getItem('auth_token')!;
  // decoded: Users = jwt_decode(this.authToken);
  
  auth = '/api/auth/login';
  token: string = '';


  actualUser: Users = {
    uid: '',
    role: '',
  }


  constructor(private http: HttpClient, private router: Router, filesService: FilesService, private usersService: UsersService) {
    // this.actualUser.uid = this.decoded.uid;
  }

  login(email: string, password: string) {
    this.http.post(this.pathApi + this.auth,  { email: email, password: password })
      .subscribe((resp: any) => {
        this.actualUser = resp.user;    
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