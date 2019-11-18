import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
/* Se importan los modulos necesarios*/

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       var token = localStorage.getItem("Token");
       console.log(request);
       if( token != null){
          request = request.clone({
                    setHeaders: {
                              Authorization: `Bearer ${token}`
                              }
                    });

       }
      return next.handle(request);
    }

}
