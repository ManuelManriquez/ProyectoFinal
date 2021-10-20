import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.css']
})
export class ModalImageComponent {

  constructor(public dialogRef: MatDialogRef<ModalImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private filesService: FilesService) { }

  deleteImage() {
    this.filesService.delFiles(this.data.url);
  }

}
