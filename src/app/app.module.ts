import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GaleryComponent } from './galery/galery.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ModalImageComponent } from './modal-image/modal-image.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    GaleryComponent,
    ModalImageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
