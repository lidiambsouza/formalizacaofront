import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FormalizacaoService { 

  baseUrl = 'http://127.0.0.1:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {}

    searchAdesao(): Observable<any> {
        return this.http.get(this.baseUrl+'consulta-ade/',
         {headers: this.httpHeaders}
        );
                    
    };

}
