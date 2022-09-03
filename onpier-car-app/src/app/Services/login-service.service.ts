import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

constructor(private _route:Router) {
    // Initialize Firebase
    this.app = initializeApp(this.firebaseConfig);
    this.getUserLoggedIn();

 }

  async login(email:string,password:string){
try {
  let result=await auth.signInWithEmailAndPassword(auth.getAuth(this.app),email,password);

} catch (error:any) {
  alert(JSON.stringify(error.message))
}

 }
 async register(email: string, password: string) {
try {
  let result= await auth.createUserWithEmailAndPassword(auth.getAuth(this.app),email,password);
} catch (error:any) {
    alert(JSON.stringify(error.message))
}
}
getUserLoggedIn(){
  return new Promise<boolean>((resolve,reject)=>{
   const unsubscribe= auth.onAuthStateChanged(auth.getAuth(this.app),(user=>{
    localStorage.setItem("user",JSON.stringify(user));
    if(user)
    resolve(true);
    else{
      localStorage.removeItem("user")
    }
    }));
  })
}
getUser(){
  let user=localStorage.getItem("user");
  if(user && user!='null')
  return JSON.parse(user);
}
logOut(){
  auth.signOut(auth.getAuth(this.app)).then(x=>{
    localStorage.removeItem("user")
    this._route.navigate(["login"]);
  })
}


}
