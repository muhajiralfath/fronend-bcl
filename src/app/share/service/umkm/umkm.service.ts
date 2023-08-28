import { Injectable } from '@angular/core';
import {NewUmkmRequest} from "../../model/request/new-umkm-request.model";
import {CommonResponse} from "../../model/response/common-response.model";
import {UmkmResponse} from "../../model/response/umkm-response.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DebtorResponse} from "../../model/response/debtor-response.model";
import {UpdateUmkmRequest} from "../../model/request/update-umkm-request.model";

@Injectable({
  providedIn: 'root'
})
export class UmkmService {
  constructor(
    private readonly http:HttpClient
  ) { }

  create(data: NewUmkmRequest): Observable<CommonResponse<UmkmResponse>>{
    return this.http.post<CommonResponse<UmkmResponse>>("/angular/api/umkm", data);
  }
  getById(id:string):Observable<CommonResponse<UmkmResponse>>{
    return this.http.get<CommonResponse<UmkmResponse>>(`/angular/api/umkm/${id}`);
  }
  getAll(){

  }
  update(data:UpdateUmkmRequest): Observable<CommonResponse<UmkmResponse>>{
    return this.http.put<CommonResponse<UmkmResponse>>(`/angular/api/umkm`, data);

  }

}
