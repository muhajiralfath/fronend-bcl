import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PaymentRequest} from "../../model/request/payment-request.model";
import {Observable} from "rxjs";
import {CommonResponse} from "../../model/response/common-response.model";
import {PaymentResponse} from "../../model/response/payment-response.model";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(
    private readonly http:HttpClient
  ) { }
  create(data:PaymentRequest):Observable<CommonResponse<PaymentResponse>>{
    return this.http.post<CommonResponse<PaymentResponse>>("/angular/api/payment", data);
  }
  getById(id:string):Observable<CommonResponse<PaymentResponse>>{
    return this.http.get<CommonResponse<PaymentResponse>>(`/angular/api/payment/${id}`);
  }
  getAll(page?:string, size?:string):Observable<CommonResponse<PaymentResponse[]>>{
    let params:HttpParams = new HttpParams()
      .set("page", page || "")
      .set("size", size || "");
    return this.http.get<CommonResponse<PaymentResponse[]>>("/angular/api/payment", {params});
  }
}
