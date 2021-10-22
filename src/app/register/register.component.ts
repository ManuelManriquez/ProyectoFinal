import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Users } from '../interfaces/users';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('txtFirstName') txtFirstName!: ElementRef<HTMLInputElement>;
  @ViewChild('txtLastName') txtLastName!: ElementRef<HTMLInputElement>;
  @ViewChild('txtEmail') txtEmail!: ElementRef<HTMLInputElement>;
  @ViewChild('txtPassword') txtPassword!: ElementRef<HTMLInputElement>;
  @ViewChild('txtRole') txtRole!: ElementRef<HTMLInputElement>;

  apiPost = 'https://www.manmanesp.com/api/users/'
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }


  firstName = '';
  lastName = '';
  email = '';
  password = '';

  newUser: Users = {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    role: 'USER_ROLE',
  };


  navLogIn() {
    this.router.navigate(['/login']);
  }

  register() {
    this.newUser.firstName = this.txtFirstName.nativeElement.value;
    this.newUser.lastName = this.txtLastName.nativeElement.value;
    this.newUser.email = this.txtEmail.nativeElement.value;
    this.newUser.password = this.txtPassword.nativeElement.value;
    this.newUser.role = this.txtRole.nativeElement.value;
    console.log(this.newUser);
    this.http.post(this.apiPost, this.newUser)
    .subscribe((resp: any) => {
      console.log(resp);
      
    });

    this.router.navigate(['login']);
  }
}
