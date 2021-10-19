import { Component } from '@angular/core';
import { Users } from '../interfaces/users';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalUserComponent } from '../modal-user/modal-user.component';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  get usersArray() {
    return this.usersService.usersArray;
  }

  constructor(public dialog: MatDialog, private authService: AuthService, private usersService: UsersService) {
    console.log(this.usersArray);

  }

  openEditDialog(uid: string, firstName: string, lastName: string, email: string, password: string, role: string) {
    const dialogRef = this.dialog.open(ModalUserComponent, { data: { uid: uid, firstName: firstName, lastName: lastName, email: email, password: password, role: role } });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openConfirmDialog(uid: string, role: string) {
    const dialogRef = this.dialog.open(ModalConfirmComponent, { data: { uid: uid, role: role} });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  navGalery() {
    this.usersService.navUsers('/galery');
  }
  logOut() {
    this.authService.logout();
  }



  showFiller = false;
}
