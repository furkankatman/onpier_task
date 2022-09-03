import {  Component,  OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';



@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  email:string;
  password:string;
  signInEnabled:boolean;
  loading:boolean;
  constructor(private _loginService:LoginServiceService) { }

  ngOnInit() {
  }

  async login(){
    this.loading=true;
    this._loginService.login(this.email,this.password);
      this.loading=false;
  }

  async register()
  {
    this.loading=true
    await this._loginService.register(this.email,this.password);
    this.loading=false;
  }

}
