import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAddCarsComponent } from './app-cars/app-cars.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppLoginComponent } from './app-login/app-login.component';

const routes: Routes = [{path:"home",component:AppHomeComponent},{path:"login",component:AppLoginComponent},{path:"cars",component:AppAddCarsComponent},
{path:"dashboard",component:AppDashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
