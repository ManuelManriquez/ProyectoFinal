import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from '../interfaces/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent {
  @ViewChild('txtFirstName') txtFirstName!: ElementRef<HTMLInputElement>;
  @ViewChild('txtLastName') txtLastName!: ElementRef<HTMLInputElement>;
  @ViewChild('txtEmail') txtEmail!: ElementRef<HTMLInputElement>;
  @ViewChild('txtPassword') txtPassword!: ElementRef<HTMLInputElement>;
  @ViewChild('txtRole') txtRole!: ElementRef<HTMLInputElement>;

  constructor(public dialogRef: MatDialogRef<ModalUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private usersService: UsersService) {
  }

  newUser: Users = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  };

  editUser() {
    this.newUser.uid = this.data.uid;
    this.newUser.firstName = this.txtFirstName.nativeElement.value;
    this.newUser.lastName = this.txtLastName.nativeElement.value;
    this.newUser.email = this.txtEmail.nativeElement.value;
    this.newUser.password = this.txtPassword.nativeElement.value;
    this.newUser.role = this.txtRole.nativeElement.value;
    this.usersService.putUser(this.newUser);
    console.log(this.newUser);
  }

  cancel(){
    this.dialogRef.close();
  }
}
