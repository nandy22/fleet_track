import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
// import { GalleryModule } from '@/modules/gallery-module';

import { AppComponent } from './app.component';
import { AppMainComponent } from './core/app-main/app-main.component';
import { AppContentComponent } from './core/app-content/app-content.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { LeftNavComponent } from './core/left-nav/left-nav.component';
// import { HomeComponent } from './modules/home/home.component';
import { AlertComponent } from './core/alert/alert.component';
import { NotificationComponent } from './core/notification/notification.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';

import { AuthService } from './service/auth-service/auth.service';
import { AuthGuardService } from './service/auth-service/auth-guard.service';
import { AlertService } from './service/alert-service/alert.service';
import { NavService } from './service/nav-service/nav.service';
import { LoginService } from './service/login-service/login.service';
import { AuthGuard } from './service/auth-guard/auth.guard';
import { TrackComponent } from './modules/track/track.component';
import { EventsComponent } from './modules/events/events.component';
import { AuthenticationService } from './service/auth-service/authentication.service';
import { DashboardComponent } from './modules/reports/dashboard/dashboard.component';
// import { HeaderNavComponent } from './core/header-nav/header-nav.component';
// import { NewCollectionComponent } from './modules/home/new-collection';
// import { DealOfDayComponent } from './modules/home/deal-of-day';
// import { HotDealsComponent } from './modules/home/hot-deals';
// import { ProductDetailComponent } from './modules/product-detail/product-detail';
// import { ListGridComponent } from './modules/list-grid/list-grid';
// import { CheckoutComponent } from './modules/checkout/checkout';
import { MapComponent } from './modules/map/map.component';
import { VehicleDetailsComponent } from './modules/vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    NotificationComponent,
    LeftNavComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    AppMainComponent,
    AppContentComponent,
    TrackComponent,
    EventsComponent,
    MapComponent,
    VehicleDetailsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    TableModule,
    TooltipModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMBfG_KAED_HUd6eci5U6bGXORfaO0r7s'
    }),
  ],
  exports: [
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AlertService,
    NavService,
    LoginService,
    AuthGuard,
    AuthenticationService,
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
