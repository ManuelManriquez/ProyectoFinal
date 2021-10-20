import { Injectable, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiPost = 'https://www.manmanesp.com/api/users/'
  apiPut = 'https://www.manmanesp.com/api/users/';
  apiGetAll = 'https://www.manmanesp.com/api/users';
  apiGet = 'http://www.manmanesp.com/api/search/users/test';

  public usersArray: any[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.getAllUsers();
  }



  navUsers(navPath: string): any {
    this.router.navigate([navPath]);
  }

  // getUsers() {
  //   this.http.get(this.apiGet, { headers: { 'x-token': localStorage.getItem('auth_token')?.toString()! } })
  //     .subscribe((resp: any) => {
  //       this.usersArray = resp;        
  //     });

  // }

  getAllUsers() {
    this.http.get(this.apiGetAll)
      .subscribe((resp: any) => {
        this.usersArray = resp.users;
      });

  }

  putUser(user: Users) {
    console.log(user.uid);

    this.http.put(`https://www.manmanesp.com/api/users/${user.uid}`, user)
      .subscribe((resp: any) => {
      });
  }



  postUser(user: Users) {
    this.http.post(this.apiPost, user, { headers: { 'x-token': localStorage.getItem('auth_token')?.toString()! } })
      .subscribe((resp: any) => {
      });
  }
}

