import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    private setSession(authResult) {
        const token = authResult.token;
        const payload = <User>jwtDecode(token);
        const expiresAt = moment.unix(payload.exp);

        localStorage.setItem('token', authResult.token);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(environment.apiUrl+'auth/login/', {username, password})
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
        if (moment().isBetween(this.getExpiration().subtract(1, 'days'), this.getExpiration())) {
            return this.http.post<any>(
                environment.apiUrl+'auth/refresh-token/',
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
}