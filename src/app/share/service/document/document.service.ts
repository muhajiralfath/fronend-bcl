import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private readonly http: HttpClient) { }

  uploadDocument(file: File | undefined): Observable<any> {
    if (file){
      let formData: FormData = new FormData();
      formData.set("document", file)
      return this.http.post('/angular/api/umkm/upload-document', formData)
    }
    throw Error
  }

  downloadDocument(documentId: string | undefined): Observable<any> {
    return this.http.get(`/angular/api/umkm/download-umkm-document/${documentId}`, {
      responseType: 'blob',
      observe: 'response'
    })
  }
}
