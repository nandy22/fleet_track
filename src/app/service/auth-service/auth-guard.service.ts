import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }
  // this method will be executed by angular before the route is loaded
  // Observable<boolean> | Promise<boolean> | boolean
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      );
  }


}



/*
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.authService.loginState.subscribe((data: any) => {
      if (data === true) {
        console.log('-data if block: ', data);
        return true;
      } else {
        // this.router.navigate(['/']);  // Absolute path
        console.log('-data else block: ', data);
        return false;
      }
    });
  }
*/
