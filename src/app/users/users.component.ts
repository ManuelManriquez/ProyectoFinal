import { Component, ElementRef, ViewChild } from '@angular/core';
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

  to: number = 0;
  limit: number = 20;

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  get usersArray() {
    return this.usersService.usersArray;
  }

  constructor(public dialog: MatDialog, private authService: AuthService, private usersService: UsersService) { 
    usersService.getUsers(); 
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

  searchUser(){
    if (this.txtSearch.nativeElement.value.length==0) {
      this.usersService.getUsers();
    }else{
      this.usersService.getSearchUser(this.txtSearch.nativeElement.value)
    }
  }
  onScroll() {
    this.limit = this.limit + 10;
    this.usersService.getMoreUsers(this.limit, this.to);    
  }

  showFiller = false;
}
