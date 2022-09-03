import { Component } from '@angular/core';
import { LoginServiceService } from './Services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onpier-car-app';
  email : any="";
  constructor(private _loginService:LoginServiceService) {
    this.email=this.getEmail();
  }
  getEmail(){
    if(this._loginService.user)
    return this._loginService.user.email;
    return null;
  }
}
