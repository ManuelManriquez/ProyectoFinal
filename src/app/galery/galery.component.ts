import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalImageComponent } from '../modal-image/modal-image.component';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})

export class GaleryComponent {


  constructor(public dialog: MatDialog, private authService: AuthService, private usersService: UsersService) { }

  openImageDialog(url: string) {
    const dialogRef = this.dialog.open(ModalImageComponent, { data: { url: url } });
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
  urlImages: string[] = ["./assets/images/perro.jpg",
    "./assets/images/adios.jpeg",
    "./assets/images/buenculo.jpg",
    "./assets/images/cartadeamor.jpg",
    "./assets/images/crimendeodio.jpg",
    "./assets/images/doge.jpg",
    "./assets/images/ke.jpg",
    "./assets/images/koala.jpg",
    "./assets/images/uwu.jpg"];

}

