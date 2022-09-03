import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  email:string;
  password:string;
  constructor(private _loginService:LoginServiceService) { }

  ngOnInit() {
  }

  async login(){
    debugger
    let result=await this._loginService.login(this.email,this.password);
    console.log(result);
  }

  async register()
  {
    debugger
    let result=  await this._loginService.register(this.email,this.password);
    console.log(result)
  }

}
