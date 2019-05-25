
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { AuthGuard } from './service/auth-guard/auth.guard';
import { AppMainComponent } from './core/app-main/app-main.component';
import { TrackComponent } from './modules/track/track.component';
// import { VehicleDetailsComponent } from './modules/vehicle-details/vehicle-details.component';

import { EventsComponent } from './modules/events/events.component';
import { DashboardComponent } from './modules/reports/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: AppMainComponent, canActivate: [AuthGuard], children: [
      { path: '', component: TrackComponent },
      { path: 'track/track', component: TrackComponent },
      { path: 'reports/dashboard', component: DashboardComponent },
      // { path: 'tracking/track', component: HomeComponent },
      // { path: 'reports/dashboard', component: DashboardComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: AppMainComponent, children: [
    { path: '', component: TrackComponent },
  ] },
  // { path: '**', component: PageNotFoundComponent },

    // { path: 'webstore', loadChildren: '../app/web-store/web-store.module#WebStoreModule' },

    /* this is the whild card route '**', it means catch all possible routes which are not covered by your app.
       this route should be always at the end, coz your route parse from top to bottom, if u place this route at the beginning,
       then no matter which route you all, all will be redirected to page not found.
    */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
