import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { FilesService } from '../services/files.service';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  fileName = '';

  constructor(private usersService: UsersService, private filesService: FilesService, private authService: AuthService, private http: HttpClient) { }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("fileName", file);

      this.filesService.postFile(formData);
    }
  }

  navUsers() {
    this.usersService.navUsers('/users');
  }
  navGalery() {
    this.usersService.navUsers('/galery');
  }

  logOut() {
    this.authService.logout();
  }

  showFiller = false;

  navUpload() {
    this.usersService.navUsers('/upload');
  }
}
