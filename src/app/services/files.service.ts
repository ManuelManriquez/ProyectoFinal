import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Files } from '../interfaces/files';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  api = 'https://www.manmanesp.com/api/uploads/';
  apiTest = 'https://localhost:8080/api/uploads/';

  public filesArray: any[] = [];
  // public filesExt: any[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.getFiles();
    // this.filesExt = this.filesArray.map(a => a.fileName);
    // for (let index = 0; index < this.filesExt.length; index++) {
    //   this.filesExt[index] = this.filesExt[index].split('.').pop()!;      
    // }
   }

   
  postFile(file: FormData){
    this.http.post(this.api, file, { headers: { 'x-token': localStorage.getItem('auth_token')?.toString()! } })
    .subscribe((resp: any) => {
    });
  }
  getFiles(){
    this.http.get(this.api)
    .subscribe((resp: any) => {
      this.filesArray = resp.files;            
    });
    
  }

  delFiles(url: String){
    this.http.delete(this.api+url, { headers: { 'x-token': localStorage.getItem('auth_token')?.toString()! } })
      .subscribe((resp: any) => {
      });
  }


}
