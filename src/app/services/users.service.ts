import { Injectable, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Users } from '../interfaces/users';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiPost = 'https://www.manmanesp.com/api/users/'
  apiPut = 'https://www.manmanesp.com/api/users/';
  apiGetAll = 'https://www.manmanesp.com/api/users';
  apiGetSearch = 'https://manmanesp.com/api/search/users/';
  public usersArray: any[] = [];

  token: string = localStorage.getItem('auth_token')!;
  decoded: Users = jwt_decode(this.token);

  constructor(private http: HttpClient, private router: Router) {
    this.getAllUsers();
  }

  actualUser: Users[] = [{
    uid: '',
    role: ''
  }]

  navUsers(navPath: string): any {
    this.router.navigate([navPath]);
  }

  getAllUsers() {
    this.http.get(this.apiGetAll)
      .subscribe((resp: any) => {
        this.usersArray = resp.users;
      });

  }

  deleteUser(user: Users){
    this.http.delete(`https://www.manmanesp.com/api/users/${user.uid}`)
      .subscribe((resp: any) => {
      });
  }

  putUser(user: Users) {
    this.http.put(`https://www.manmanesp.com/api/users/${user.uid}`, user)
      .subscribe((resp: any) => {
      });
  }

  postUser(user: Users) {
    this.http.post(this.apiPost, user, { headers: { 'x-token': localStorage.getItem('auth_token')?.toString()! } })
      .subscribe((resp: any) => {
      });
  }

  getSearchUser(query: String) {
    this.http.get(this.apiGetSearch + query, { headers: { 'x-token': localStorage.getItem('auth_token')?.toString()! } })
      .subscribe((resp: any) => {
        this.usersArray = resp.results;
      });
  }
}

