import { Component } from '@angular/core';
import { LoginServiceService } from './Services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'onpier-car-app';

  constructor(public _loginService:LoginServiceService) {

  }
}
