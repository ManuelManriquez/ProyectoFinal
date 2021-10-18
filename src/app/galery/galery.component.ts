import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalImageComponent } from '../modal-image/modal-image.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})

export class GaleryComponent {

  // tiles: Tile[] = [
  //   { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
  //   { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
  //   { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
  //   { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  // ];
  constructor(public dialog: MatDialog, private authService: AuthService) { }
  openImageDialog(url: string) {
    const dialogRef = this.dialog.open(ModalImageComponent, { data: { url: url } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logOut() {
    this.authService.logout();
  }

  showFiller = false;
  urlImages: string[] = ["./assets/images/perro.jpg",
    "./assets/images/adios.jpeg",
    // "./assets/images/buenculo.jpg",
    "./assets/images/cartadeamor.jpg",
    "./assets/images/crimendeodio.jpg",
    "./assets/images/doge.jpg",
    "./assets/images/ke.jpg",
    "./assets/images/koala.jpg",
    "./assets/images/uwu.jpg"];

}

