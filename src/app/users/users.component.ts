import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalUserComponent } from '../modal-user/modal-user.component';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';
import { ModalAddUserComponent } from '../modal-add-user/modal-add-user.component';

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
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(ModalAddUserComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
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

  addUser(){
    this.authService.nav('/addUser')
  }

  showFiller = false;
}
