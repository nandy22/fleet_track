import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/auth-service/authentication.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  userLogout(values: Object): void {
    // this.LoginService.processLogout();
    // this.navService.userSession.next({storeId: 'web-store', navId: 'guest'});
    // this.authService.logout();
    this.authenticationService.logout();
  }

}
