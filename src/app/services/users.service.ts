import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiPut = 'http://localhost:8080/api/users/';
  apiGetAll = 'http://localhost:8080/api/users';
  apiGet = 'http://localhost:8080/api/search/users/test';
  
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

  putUser(user: Users){
    console.log(user.uid);
        
    this.http.put(`http://localhost:8080/api/users/${user.uid}`,user)
      .subscribe((resp: any) => {
      });
  }
}

