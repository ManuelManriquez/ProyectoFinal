import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from '../interfaces/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent {

  constructor(public dialogRef: MatDialogRef<ModalConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private usersService: UsersService) { }

    newUser: Users = {
      uid: '',
      role: '',
      state: true
    };

  confirm() {
    this.newUser.uid = this.data.uid;
    this.newUser.role = this.data.role;
    this.newUser.state = false;

    this.usersService.deleteUser(this.newUser);
    this.usersService.putUser(this.newUser);
    this.dialogRef.close();
  }
  cancel(): void {
    this.dialogRef.close();
  }

}
