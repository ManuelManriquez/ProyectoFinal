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
  @ViewChild('txtFirstNameR') txtFirstNameR!: ElementRef<HTMLInputElement>;
  @ViewChild('txtLastNameR') txtLastNameR!: ElementRef<HTMLInputElement>;
  @ViewChild('txtEmailR') txtEmailR!: ElementRef<HTMLInputElement>;
  @ViewChild('txtPasswordR') txtPasswordR!: ElementRef<HTMLInputElement>;

  apiPost = 'https://www.manmanesp.com/api/users/'
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }


  firstName = '';
  lastName = '';
  email = '';
  password = '';

  newUser: Users = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  };


  navLogIn() {
    this.router.navigate(['/login']);
  }

  register() {
    this.newUser.firstName = this.txtFirstNameR.nativeElement.value;
    this.newUser.lastName = this.txtLastNameR.nativeElement.value;
    this.newUser.email = this.txtEmailR.nativeElement.value;
    this.newUser.password = this.txtPasswordR.nativeElement.value;
    this.newUser.role = 'USER_ROLE';
    console.log(this.newUser);
    this.http.post(this.apiPost, this.newUser)
      .subscribe((resp: any) => {
        console.log(resp);

      });

    this.router.navigate(['login']);
  }
}
