import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {SubmissionResponse} from "../../model/response/submission-response";

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getAll(minLoanAmount?: string, maxLoanAmount?: string,
         page?: string, size?: string
  ): Observable<SubmissionResponse[]> {
    const params: HttpParams = new HttpParams()
      .set('minLoanAmount', minLoanAmount || '')
      .set('maxLoanAmount', maxLoanAmount || '')
      .set('page', page || '')
      .set('size', size || '');

    return this.http.get<SubmissionResponse[]>('/angular/api/submissions', {params});
  }
}
