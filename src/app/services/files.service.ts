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
  public from: number = 0;
  public to: number = 100;


  public filesArray: any[] = [];
  public filesExtArray: any[] = [];

  files: Files =
    {
      _id: '',
      fileName: '',
    }

  constructor(private http: HttpClient, private router: Router) {
    this.getFiles();
  }


  postFile(file: FormData) {
    this.http.post(this.pathApi + this.getFilesApi, file, { headers: { 'x-token': localStorage.getItem('auth_token')?.toString()! } })
      .subscribe((resp: any) => {
      });
  }

  getMoreFiles(limit: number, from: number) {
    this.http.get(this.pathApi + this.getFilesApi + '?limit=' + limit + '&from=' + from)
      .subscribe((resp: any) => {
        this.filesArray = resp.files
        this.filesArray.map(file => {
          file.extension = file.fileName.split('.').pop()!;

        })
      });
  }
  getFiles() {
    this.http.get(this.pathApi + this.getFilesApi)
      .subscribe((resp: any) => {
        this.filesArray = resp.files
        this.filesArray.map(file => {
          file.extension = file.fileName.split('.').pop()!;
        })
      });
  }

  delFiles(url: String) {
    this.http.delete(this.pathApi + this.getFilesApi + url, { headers: { 'x-token': localStorage.getItem('auth_token')?.toString()! } })
      .subscribe((resp: any) => {
      });
  }

  navFiles(navPath: string) {
    this.router.navigate([navPath]);
  }

  test() {
    console.log(this.filesExtArray);

  }

}
