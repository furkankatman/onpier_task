import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  readonly firebaseConfig = {
    apiKey: "AIzaSyAEZeP5F1td9V91sa4ls88wHnW09mvtW4E",
    authDomain: "onpier-car-app.firebaseapp.com",
    projectId: "onpier-car-app",
    storageBucket: "onpier-car-app.appspot.com",
    messagingSenderId: "487143760030",
    appId: "1:487143760030:web:e1714f3ddf5de8bfc71b8f",
    measurementId: "G-PND65CRTT1"
  };
 readonly app:FirebaseApp;
 user:auth.User;

constructor() {
    // Initialize Firebase
    this.app = initializeApp(this.firebaseConfig);
 }

  async login(email:string,password:string){
try {
  let result=await auth.signInWithEmailAndPassword(auth.getAuth(this.app),email,password);
  this.user=result.user;

} catch (error:any) {
  alert(JSON.stringify(error.message))
}

 }
 async register(email: string, password: string) {
try {
  let result= await auth.createUserWithEmailAndPassword(auth.getAuth(this.app),email,password);
    this.user=result.user;
} catch (error:any) {
    alert(JSON.stringify(error.message))
}
}


}
