import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommonResponse} from "../../model/response/common-response.model";
import {SubmissionResponse} from "../../model/response/submission-response";

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(
    private readonly http: HttpClient
  ) {
  }

  getAll(page?: string, size?: string): Observable<CommonResponse<SubmissionResponse[]>> {
    const params: HttpParams = new HttpParams()
      .set('page', page || '')
      .set('size', size || '');

    return this.http.get<CommonResponse<SubmissionResponse[]>>('/angular/api/bills', {params});
  }
}
