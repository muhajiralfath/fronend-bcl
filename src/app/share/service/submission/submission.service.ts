import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {SubmissionResponse} from "../../model/response/submission-response.model";
import {CommonResponse} from "../../model/response/common-response.model";
import {AcceptRejectRequest} from "../../model/request/accept-reject-request.model";
import {NewSubmissionReq} from "../../model/request/new-submission-request.model";

@Injectable({
  providedIn: 'root'
})

export class SubmissionService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getAll(minLoanAmount?: string, maxLoanAmount?: string,
         page?: string, size?: string
  ): Observable<CommonResponse<SubmissionResponse[]>> {
    const params: HttpParams = new HttpParams()
      .set('minLoanAmount', minLoanAmount || '')
      .set('maxLoanAmount', maxLoanAmount || '')
      .set('page', page || '')
      .set('size', size || '');

    return this.http.get<CommonResponse<SubmissionResponse[]>>('/angular/api/submissions', {params});
  }

  accept(submissionId: string): Observable<any> {
    const body: AcceptRejectRequest = {
      id: submissionId,
      isApprove: true
    };
    console.log(body)
    return this.http.put('/angular/api/submissions', body);
  }

  reject(submissionId: string): Observable<any> {
    const body: AcceptRejectRequest = {
      id: submissionId,
      isApprove: false
    };
    console.log(body)
    return this.http.put('/angular/api/submissions', body);
  }

  addSubmission(newSubmissionReq: NewSubmissionReq): Observable<any> {
    return this.http.post('/angular/api/submissions', newSubmissionReq);
  }

  getSubmissionByDebtorId(debtorId: string) : Observable<CommonResponse<SubmissionResponse[]>>{
    return this.http.get<CommonResponse<SubmissionResponse[]>>(`/angular/api/submissions/debtor/${debtorId}`);
  }
}
