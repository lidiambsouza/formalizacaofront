import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { User } from '@app/_models';



@Injectable()
export class DjangoBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');

        if (token) {
            const cloned = request.clone({
                headers: request.headers.set('Authorization', 'JWT '.concat(token))
            });

            return next.handle(cloned);
        } else {
            return next.handle(request);
        }

        // helper functions

        

        function error(message) {
            return throwError({ error: { message } });
        }

       

       
    }
}

export let djangoBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: DjangoBackendInterceptor,
    multi: true
};