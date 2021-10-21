import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Files } from '../interfaces/files';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  public pathApi: string = 'https://manmanesp.com';
  public getFilesApi = '/api/uploads/';
  public getFile = '/uploads/';


  public filesArray: any[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.getFiles();
   }


  postFile(file: FormData){
    this.http.post(this.pathApi+this.getFilesApi, file, { headers: { 'x-token': localStorage.getItem('auth_token')?.toString()!}})
    .subscribe((resp: any) => {
    });
  }
  getFiles(){
    this.http.get(this.pathApi+this.getFilesApi)
    .subscribe((resp: any) => {
      this.filesArray = resp.files;
    });
    
  }

  delFiles(url: String){
    this.http.delete(this.pathApi+this.getFilesApi+url, { headers: { 'x-token': localStorage.getItem('auth_token')?.toString()! } })
      .subscribe((resp: any) => {
      });
  }

  navFiles(navPath: string){
    this.router.navigate([navPath]);
  }

}
