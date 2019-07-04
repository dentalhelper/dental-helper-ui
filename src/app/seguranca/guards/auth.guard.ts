import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAccessTokenInvalido()) {
      if (this.router.url !== '/login') {
        this.authService.obterNovoAccessToken()
          .then(() => {
            if (this.authService.isAccessTokenInvalido()) {
              this.router.navigate(['/login']);
              return false;
            }
            return true;
          });
      }

    } else if (next.data.roles && !this.authService.hasAnyAuthority(next.data.roles)) {

      this.router.navigate(['/forbidden']);
      return false;
    }
    return true;
  }

}
