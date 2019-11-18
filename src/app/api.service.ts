import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

/* PIngServer*/
  ping$() {
      const httpOptions = { headers: new HttpHeaders()
                                    .set('Access-Control-Allow-Origin', '*')
                             };
      this.http.get('http://localhost:8585/api/usuarios',httpOptions)
      .subscribe(res => {
                        console.log(res);
                         },
                  err => console.log(err)
                );
    }


}
