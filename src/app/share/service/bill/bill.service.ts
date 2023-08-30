import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommonResponse} from "../../model/response/common-response.model";
import {BillResponse} from "../../model/response/bill.response.model";
import {UmkmResponse} from "../../model/response/umkm-response.model";
import {UpdateBillUmkmRequest} from "../../model/request/update-bill-umkm-request.model";
import {UpdateBillAdminRequest} from "../../model/request/update-bill-admin-request.model";

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(
    private readonly http: HttpClient
  ) {
  }
  getById(id:string):Observable<CommonResponse<BillResponse>>{
    return this.http.get<CommonResponse<BillResponse>>(`/angular/api/bills/${id}`);
  }
  getByDebtorId(id:string):Observable<CommonResponse<BillResponse[]>>{
    return this.http.get<CommonResponse<BillResponse[]>>(`/angular/api/bills/debtor/${id}`);
  }

  getAll(page?: string, size?: string): Observable<CommonResponse<BillResponse[]>> {
    const params: HttpParams = new HttpParams()
      .set('page', page || '')
      .set('size', size || '');

    return this.http.get<CommonResponse<BillResponse[]>>('/angular/api/bills', {params});
  }
  updateForUmkm(data:UpdateBillUmkmRequest):Observable<CommonResponse<BillResponse>>{
    return this.http.put<CommonResponse<BillResponse>>(`/angular/api/bills`, data);
  }
  updateForAdmin(data:UpdateBillAdminRequest):Observable<CommonResponse<BillResponse>>{
    return this.http.put<CommonResponse<BillResponse>>("/angular/api/bills/verify", data);
  }
}
