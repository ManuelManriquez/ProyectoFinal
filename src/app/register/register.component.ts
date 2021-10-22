import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
  }


  newUser: Users = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  };

  firstName = '';
  lastName = '';
  email = '';
  password = '';

register(){
  this.newUser.firstName = this.firstName;
  this.newUser.lastName = this.lastName;
  this.newUser.email = this.email;
  this.newUser.password = this.password;
  this.newUser.role = 'USER_ROLE';
  this.usersService.postUser(this.newUser)
  this.usersService.navUsers('login');
}
}
