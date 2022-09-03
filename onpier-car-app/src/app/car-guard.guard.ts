import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './Services/login-service.service';
import * as auth from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class CarGuardGuard implements CanActivate {
  /**
   *
   */
  user:any;
  constructor(private _loginService:LoginServiceService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(state.url=="/home" || state.url=="/login")
      return true
        if(this._loginService.getUser())
        return true
        return false;
  }

}
