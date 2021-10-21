import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Files } from '../interfaces/files';
import { ModalImageComponent } from '../modal-image/modal-image.component';
import { AuthService } from '../services/auth.service';
import { FilesService } from '../services/files.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})


export class GaleryComponent {

  get filesArray() {
    return this.filesService.filesArray;
  }

  filesExt: any[] = [];

  filesFileName: any[] = []

  files: Files =
    {
      _id: '',
      fileName: '',
      extension: '',
    }

  constructor(public dialog: MatDialog, private authService: AuthService, private usersService: UsersService, public filesService: FilesService) {
    filesService.getFiles;
    this.filesExt = this.filesArray.map(a => a.fileName);
    for (let index = 0; index < this.filesExt.length; index++) {
      this.filesExt[index] = this.filesExt[index].split('.').pop()!;
    }
    console.log(this.filesArray);
    
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

  showFiller = false;

  navUpload() {
    this.usersService.navUsers('/upload');
  }

}

