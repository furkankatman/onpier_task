import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCarsComponent } from './app-cars/app-cars.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppLoginComponent } from './app-login/app-login.component';

const routes: Routes = [{path:"home",component:AppHomeComponent},{path:"login",component:AppLoginComponent},{path:"cars",component:AppCarsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
