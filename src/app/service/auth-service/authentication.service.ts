import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    public apiServer = environment.apiServer + '/api/login';
    constructor(private http: HttpClient, private router: Router) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.apiServer}`, { userName: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('accessToken', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
      // remove user from local storage to log user out
      sessionStorage.removeItem('accessToken');
      this.router.navigate(['/login']);
  }
}
