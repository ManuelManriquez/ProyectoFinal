import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilesService } from '../services/files.service';
import jwt_decode from "jwt-decode";
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.css']
})
export class ModalImageComponent {
  validated: boolean = false;
  token: string = localStorage.getItem('auth_token')!;
  decoded: Users = jwt_decode(this.token);

fileVal: Users ={
  uid: ''
}

  constructor(public dialogRef: MatDialogRef<ModalImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public filesService: FilesService) {
    if (this.data.user == this.decoded.uid) {
      this.validated = true;
    } else {
      this.validated = false;
    }
  }

  deleteImage() {
    this.filesService.delFiles(this.data.url);
  }

  saveImage(){
    
  }

}
