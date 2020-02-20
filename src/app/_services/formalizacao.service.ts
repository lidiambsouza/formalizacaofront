import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FormalizacaoService { 

  
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {}

    searchAdesao(): Observable<any> {
        return this.http.get(environment.apiUrl+'consulta-ade/',
         {headers: this.httpHeaders}
        );
                    
    };

}
