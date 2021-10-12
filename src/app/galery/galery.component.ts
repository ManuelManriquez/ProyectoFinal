import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})

export class GaleryComponent {

  lista: string[] = ["pito", "pija", "verga", "pichula", "ayuda", "aaaa", "pija", "verga", "pichula", "ayuda", "aaaa"];
  // tiles: Tile[] = [
  //   { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
  //   { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
  //   { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
  //   { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  // ];
  constructor() { }
  showFiller = false;
}

