import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Users } from '../interfaces/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrls: ['./modal-add-user.component.css']
})
export class ModalAddUserComponent {
  @ViewChild('txtFirstName') txtFirstName!: ElementRef<HTMLInputElement>;
  @ViewChild('txtLastName') txtLastName!: ElementRef<HTMLInputElement>;
  @ViewChild('txtEmail') txtEmail!: ElementRef<HTMLInputElement>;
  @ViewChild('txtPassword') txtPassword!: ElementRef<HTMLInputElement>;
  @ViewChild('txtRole') txtRole!: ElementRef<HTMLInputElement>;
  constructor(private usersService: UsersService, public dialogRef: MatDialogRef<ModalAddUserComponent>) { }

  newUser: Users = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  };

  cancel(): void {
    this.dialogRef.close();
  }

  addUser() {
    this.newUser.firstName = this.txtFirstName.nativeElement.value;
    this.newUser.lastName = this.txtLastName.nativeElement.value;
    this.newUser.email = this.txtEmail.nativeElement.value;
    this.newUser.password = this.txtPassword.nativeElement.value;
    this.newUser.role = this.txtRole.nativeElement.value;
    this.usersService.postUser(this.newUser);
    this.dialogRef.close();
  }
}
