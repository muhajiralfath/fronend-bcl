import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {DebtorResponse} from "../../model/response/debtor-response.model";
import {CommonResponse} from "../../model/response/common-response.model";
import {UpdateDebtorRequest} from "../../model/request/update-debtor-request.model";
import {PagingResponse} from "../../model/response/paging-response.model";

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
  getAll(keyword?:string, page?:string, size?:string):Observable<CommonResponse<DebtorResponse[]>>{
    let params:HttpParams = new HttpParams()
      .set("keyword", keyword || "")
      .set("page", page || "")
      .set("size", size || "");
    return this.http.get<CommonResponse<DebtorResponse[]>>("/angular/api/debtors", {params});
  }
  update(data:UpdateDebtorRequest):Observable<CommonResponse<DebtorResponse>>{
    return this.http.put<CommonResponse<DebtorResponse>>(`/angular/api/debtors`, data);
  }
}
