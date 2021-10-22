import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Files } from '../interfaces/files';
import { ModalImageComponent } from '../modal-image/modal-image.component';
import { AuthService } from '../services/auth.service';
import { FilesService } from '../services/files.service';
import { UsersService } from '../services/users.service';
import jwt_decode from "jwt-decode";
import { Users } from '../interfaces/users';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})



export class GaleryComponent {

  token: string = localStorage.getItem('auth_token')!;
  decoded: Users = jwt_decode(this.token);
  validated: boolean = false;

  to: number = 0;
  limit: number = 15;

  get filesArray() {
        return this.filesService.filesArray;
  }

  get filesExtArray() {
    return this.filesService.filesExtArray;
  }

  get usersArray() {
    return this.usersService.usersArray;
  }

  constructor(private http: HttpClient, public dialog: MatDialog, private authService: AuthService, private usersService: UsersService, public filesService: FilesService) {
  }

  openImageDialog(url: string, user: string, type: number) {
    const dialogRef = this.dialog.open(ModalImageComponent, { data: { url: url, user: user, type: type } });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openFileDialog(fileIconUrl: string, url: string, user: string, type: number, ext: string) {
    const dialogRef = this.dialog.open(ModalImageComponent, { data: { fileIconUrl: fileIconUrl, url: url, user: user, type: type, ext: ext } });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  navUsers() {
    this.usersService.navUsers('/users');
  }

  logOut() {
    this.authService.logout();
  }

  navUpload() {
    this.usersService.navUsers('/upload');
  }

  onScroll() {
    console.log('scrolled!!');
    this.limit = this.limit+5;
    this.filesService.getMoreFiles(this.limit, this.to);
  }

}

