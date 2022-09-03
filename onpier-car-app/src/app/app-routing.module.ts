import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAddCarsComponent } from './app-cars/app-cars.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { CarGuardGuard } from './car-guard.guard';

const routes: Routes = [{path:"home",component:AppHomeComponent,canActivate:[CarGuardGuard]},{path:"login",component:AppLoginComponent,canActivate:[CarGuardGuard]},{path:"cars",component:AppAddCarsComponent,canActivate:[CarGuardGuard]},
{path:"dashboard",component:AppDashboardComponent,canActivate:[CarGuardGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
