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

@Injectable()
export class InterceptorService implements HttpInterceptor{

  constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       var token = localStorage.getItem("access_token");
       console.log(request);
       console.log("Token:" + token);
       if( token != null){
          request = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${token}`)
                    });

       }
        console.log(request);
      return next.handle(request);
    }

}
