import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AuthService {

  public loginState = false;

  constructor() {
  }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loginState);
        }, 800);
      }
    );
    return promise;
  }

  login(): void {
    this.loginState = true; // true
  }

  logout(): void {
    this.loginState = false;   // false
  }
}
