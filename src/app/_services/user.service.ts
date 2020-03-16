import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ 
    providedIn: 'root' 
})
export class UserService {

    httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    users: any;
    
    constructor(private http: HttpClient) {}

    getAll(): Observable<any>{
        return this.http.get(environment.apiUrl+'auth/user/',
        {headers: this.httpHeaders}
        );
    }

    PermitAdm(): boolean{
       this.getAll().pipe().subscribe(users => {           
            this.users =users;
            
          });
          
          if (this.users.pk==3){
              return true;
          }
          return false;
    }
}