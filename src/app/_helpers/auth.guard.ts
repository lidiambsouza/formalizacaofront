import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '@app/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate() {
        
        if (this.authenticationService.isLoggedIn()) {
            this.authenticationService.refreshToken();

            return true;
        }

        this.authenticationService.logout();
        this.router.navigate(['/login']);
        return false;
    }
}