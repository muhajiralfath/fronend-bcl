import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DebtorResponse} from "../../model/response/debtor-response.model";
import {CommonResponse} from "../../model/response/common-response.model";
import {UpdateDebtorRequest} from "../../model/request/update-debtor-request.model";

@Injectable({
  providedIn: 'root'
})
export class DebtorService {
  constructor(
    private readonly http:HttpClient
  ) { }
  getByToken():Observable<CommonResponse<DebtorResponse>>{
    return this.http.get<CommonResponse<DebtorResponse>>("/angular/api/debtors/me");
  }
  getById(id: string): Observable<CommonResponse<DebtorResponse>> {
    return this.http.get<CommonResponse<DebtorResponse>>(`/angular/api/debtors/${id}`);
  }
  update(data:UpdateDebtorRequest):Observable<CommonResponse<DebtorResponse>>{
    return this.http.put<CommonResponse<DebtorResponse>>(`/angular/api/debtors`, data);
  }
}
