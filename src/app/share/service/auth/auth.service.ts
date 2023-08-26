import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthRequest} from "../../model/request/auth-request.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http:HttpClient
  ) { }
  registerDebtor(request:AuthRequest):Observable<any>{
    return this.http.post("/angular/api/auth/register", request);
  }

  login(request:AuthRequest):Observable<any>{
    return this.http.post("/angular/api/auth/login", request);
  }
}
