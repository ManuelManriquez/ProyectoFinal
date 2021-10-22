import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-modal-confirm-upload',
  templateUrl: './modal-confirm-upload.component.html',
  styleUrls: ['./modal-confirm-upload.component.css']
})
export class ModalConfirmUploadComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalConfirmComponent>) { }

  ngOnInit(): void {
  }

  confirm(): void {
    this.dialogRef.close();
    window.location.reload();
  }
}
