import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  email = '';
  password = '';

  login: boolean = true;

  constructor(public authService: AuthService, private router: Router) {
  }

  Login() {
    this.authService.login(this.email, this.password)
  }

  navRegister() {
    this.router.navigate(['/register']);
  }
}
