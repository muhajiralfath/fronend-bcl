import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import Swal from 'sweetalert2';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly router:Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem("token");
    return next.handle(request.clone({
      setHeaders: {
        authorization: `Bearer ${token}`,
        'ngrok-skip-browser-warning': 'true'
      }
    })).pipe(
      catchError((error:HttpErrorResponse) => {
        let errMsg = ""
        if (error.status === 401) {
          Swal.fire("Unauthorized")
          errMsg = "Unauthorized"
          this.router.navigateByUrl("/")
        }
        return throwError(()=> errMsg);
      })
    );

  }
}
