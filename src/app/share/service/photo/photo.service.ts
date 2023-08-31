import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private readonly http: HttpClient) { }

  upload(file: File | undefined): Observable<any> {
    if (file) {
      let formData: FormData = new FormData();
      formData.set("image", file);
      return this.http.put('/angular/api/users/profile-picture', formData);
    }
    throw Error;
  }

  download(imageId: string): Observable<any> {
    return this.http.get(`/angular/api/users/profile-picture/${imageId}`, {
      responseType: 'blob',
      observe: 'response'
    });
  }
}
