import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private authService: AuthService) { }

  logOut() {
    this.authService.logout();
    console.log('aaaa');
  }
  showFiller = false;
}
