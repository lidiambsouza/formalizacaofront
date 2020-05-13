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

  searchConsultorCorban(consultor, coban, bmg, status, datapg, dataup, valor, servico, datapI, datapF): Observable<any> {
    let str = "?";

    if (consultor) {
      str = str + "consultor=" + consultor + "&";
    }

    if (coban) {
      str = str + "resp_corban=" + coban + "&";
    }
    if (bmg) {
      str = str + "resp_bmg=" + bmg + "&";
    }

    if (status) {
      str = str + "status=" + status + "&";
    }

    if (valor) {
      str = str + "valor=" + valor + "&";
    }
    if (servico) {
      str = str + "servico=" + servico + "&";
    }
    if (datapg) {
      str = str + "data_pagamento=" + datapg + "&";
    }
    if (dataup) {
      str = str + "update_at=" + dataup + "&";
    }
    if (datapI) {
      str = str + "start_date=" + datapI + "&";
    }
    if (datapF) {
      str = str + "end_date=" + datapF + "&";
    }




    return this.http.get(environment.apiUrl + 'consultor-corban/' + str,
      { headers: this.httpHeaders });

  }

  searchOperator(consultor, coban, bmg, status, datapg, dataup, valor, servico, datapI, datapF): Observable<any> {
    let str = "?";

    if (consultor) {
      str = str + "consultor=" + consultor + "&";
    }

    if (coban) {
      str = str + "resp_corban=" + coban + "&";
    }
    if (bmg) {
      str = str + "resp_bmg=" + bmg + "&";
    }

    if (status) {
      str = str + "status=" + status + "&";
    }

    if (valor) {
      str = str + "valor=" + valor + "&";
    }
    if (servico) {
      str = str + "servico=" + servico + "&";
    }
    if (datapg) {
      str = str + "data_pagamento=" + datapg + "&";
    }
    if (dataup) {
      str = str + "update_at=" + dataup + "&";
    }
    if (datapI) {
      str = str + "start_date=" + datapI + "&";
    }
    if (datapF) {
      str = str + "end_date=" + datapF + "&";
    }



    return this.http.get(environment.apiUrl + 'operator/' + str,
      { headers: this.httpHeaders });

  }



}
