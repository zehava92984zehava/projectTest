import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Details } from './details';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
    url = 'https://ibell.frb.io/api/test/getJson';
  // send(details:Details) {
  //    return this
  //            .http
  //            .post(`${this.url}/details`);
  //  }



  // send(details:Details){
  //   return this.http.post<String>(this.url,details);
  // }

  send(data:Details): Observable<Object> {
    return this.http.post(this.url, data);
  }
  nore_than_fifty(data:Details): Observable<Object>
  {
    debugger
    var url_m='https://ibell.frb.io/zapier/add/lead/31198'
    return this.http.post(url_m, data);
  }

  less_than_fifty(data:Details): Observable<Object>
  {
    debugger
    var url_l='https://ibell.frb.io/zapier/add/lead/38754'
    return this.http.post(url_l, data);
  }

}


