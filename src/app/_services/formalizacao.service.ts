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

    searchAdesao(capt): Observable<any> {
      console.log(capt);
      //this.http.get(environment.apiUrl+'consulta-ade',
        // {headers: this.httpHeaders}
       // );

       // return this.http.get(environment.apiUrl+'consulta-ade-bmg/?recaptcha='+ capt,
       // {headers: this.httpHeaders});

        return this.http.get(environment.apiUrl+'consulta-ade',
         {headers: this.httpHeaders}
         );
                    
    };
    searchImg(): Observable<any>{
      return this.http.get(environment.apiUrl+'image/',
      {responseType: 'blob'}
      );
    };


}
