import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AppHomeComponent } from './app-home/app-home.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppAddCarsComponent } from './app-cars/app-cars.component';
import { LoginServiceService } from './Services/login-service.service';
import { FormsModule } from '@angular/forms';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEZeP5F1td9V91sa4ls88wHnW09mvtW4E",
  authDomain: "onpier-car-app.firebaseapp.com",
  projectId: "onpier-car-app",
  storageBucket: "onpier-car-app.appspot.com",
  messagingSenderId: "487143760030",
  appId: "1:487143760030:web:e1714f3ddf5de8bfc71b8f",
  measurementId: "G-PND65CRTT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
      AppHomeComponent,
      AppLoginComponent,
      AppAddCarsComponent,
      AppDashboardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
