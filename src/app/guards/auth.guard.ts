import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';
import Auth from '@aws-amplify/auth';

@Injectable({ providedIn: 'root' })

  export class AuthGuard implements CanActivate {
    constructor( private _router: Router ) { }
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return Auth.currentAuthenticatedUser().then(() => { return true; })
        .catch(() => { 
          this._router.navigate(['auth/sign-in']);
          return false;
        });
    }
}
