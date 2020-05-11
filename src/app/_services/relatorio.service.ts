import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }


  searchConsultor(): Observable<any> {
    return this.http.get(environment.apiUrl + 'all_consultor/',
      { headers: this.httpHeaders }
    );
  }

  searchCoban(): Observable<any> {
    return this.http.get(environment.apiUrl + 'all_resp_corban/',
      { headers: this.httpHeaders }
    );
  }

  searchBMG(): Observable<any> {
    return this.http.get(environment.apiUrl + 'all_resp_bmg/',
      { headers: this.httpHeaders }
    );
  }

  searchStatus(): Observable<any> {
    return this.http.get(environment.apiUrl + 'all_status/',
      { headers: this.httpHeaders }
    );
  }



}
