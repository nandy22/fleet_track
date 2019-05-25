import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth-service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../service/alert-service/alert.service';
import { NavService } from '../../service/nav-service/nav.service';
import { LoginService } from '../../service/login-service/login.service';
import { AuthenticationService } from '../../service/auth-service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public signupClicked = false;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(private navService: NavService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // reset login status
    this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  userLogout(values: Object): void {
    // this.LoginService.processLogout();
    // this.navService.userSession.next({storeId: 'web-store', navId: 'guest'});
    // this.authService.logout();
    this.authenticationService.logout();
  }

  onSubmit(values: Object): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;
    this.authenticationService.login(values['username'], values['password'])
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  public onSignInClick() {
    this.signupClicked = false;
    console.log("Sign in clicked " + this.signupClicked);
  }

  public onSignUpClick() {
    this.signupClicked = true;
    console.log("Sign up clicked " + this.signupClicked);

  }
}
