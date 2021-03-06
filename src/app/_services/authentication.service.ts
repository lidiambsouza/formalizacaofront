﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of,throwError } from 'rxjs';
import { map, tap, shareReplay, catchError } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public errors: any = []
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();

    }

    private setSession(authResult) {
        const token = authResult.token;
        const payload = <User>jwtDecode(token);
        const expiresAt = moment.unix(payload.exp);
        localStorage.setItem('currentUser', JSON.stringify(authResult)),
            this.currentUserSubject.next(authResult),

            localStorage.setItem('token', authResult.token);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(environment.apiUrl + 'auth/login/', { username, password })
            .pipe(
                tap(response => this.setSession(response)),
                shareReplay(),

            );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }


    get token(): string {
        return localStorage.getItem('token');
    }

    refreshToken() {
        if (moment().isBetween(this.getExpiration().subtract(12, 'hours'), this.getExpiration())) {
            return this.http.post<any>(
                environment.apiUrl + 'auth/refresh-token/',
                { token: this.token }
            ).pipe(
                tap(response => this.setSession(response)),
                shareReplay(),

            ).subscribe();
        }
    }

    getExpiration() {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration);

        return moment(expiresAt);
    }

    isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }
    private handleError (error: any) {
        console.log(typeof(error))
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      }
    
    signup(username: string, email: string, password1: string, password2: string) {
        return this.http.post(
            environment.apiUrl + 'auth/signup/',
            { username, email, password1, password2 }
        ).pipe(
            tap(
                response => {
                    this.setSession(response)
                    console.log("response", response);
                },
            ),
            catchError(error =>                
                this.handleError(error)    
                
            ),
            shareReplay(),


        );
    }


}