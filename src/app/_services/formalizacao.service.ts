import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '@environments/environment';



@Injectable({
  providedIn: 'root'
})
export class FormalizacaoService {
  private btSearchBMGSubject: BehaviorSubject<boolean>;
  public btSearchBMG: Observable<boolean>;
  

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { 
    
    this.btSearchBMGSubject=new BehaviorSubject<boolean>(JSON.parse(sessionStorage.getItem('btSearchBMG')));
    this.btSearchBMG= this.btSearchBMGSubject.asObservable();
  }

  public get btSearchBMGValue(): boolean {
    return this.btSearchBMGSubject.value;
  }

  updatebtSearchBMGValue(x: boolean){
    sessionStorage.removeItem('btSearchBMG');
    sessionStorage.setItem('btSearchBMG', JSON.stringify(x)),
    this.btSearchBMGSubject.next(JSON.parse(sessionStorage.getItem('btSearchBMG')));
  }

  searchAdesaoBMG(capt): Observable<any> {
    const httpParams = new HttpParams()
    .set('recaptcha', capt);
   

    return this.http.get(environment.apiUrl + 'consulta-ade-bmg/', 
      { headers: this.httpHeaders,
        params: httpParams});    

  };


  searchImg(): Observable<any> {
    return this.http.get(environment.apiUrl + 'image/',
      { responseType: 'blob' }
    );
  };

  searchAdesao(): Observable<any> {
    return this.http.get(environment.apiUrl + 'consulta-ade/',
      { headers: this.httpHeaders }
    );
  }

  searchAdesaoApi(): Observable<any> {
    return this.http.get(environment.apiUrl + 'consulta-ade-api/',
      { headers: this.httpHeaders }
    );
  }


}
