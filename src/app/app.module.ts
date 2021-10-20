import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GaleryComponent } from './galery/galery.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalImageComponent } from './modal-image/modal-image.component';
import { UsersComponent } from './users/users.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalUserComponent } from './modal-user/modal-user.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ModalAddUserComponent } from './modal-add-user/modal-add-user.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    GaleryComponent,
    ModalImageComponent,
    UsersComponent,
    ModalUserComponent,
    ModalConfirmComponent,
    ModalAddUserComponent,
    UploadComponent,  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LogInComponent },
      { path: 'galery', component: GaleryComponent },
      { path: 'users', component: UsersComponent },
      { path: 'upload', component: UploadComponent }
    ]),
    HttpClientModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
