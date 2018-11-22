import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    return this.loginService.isAuthenticated().then(
      (auth: boolean) => {
        if (auth) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      });
  }

}
