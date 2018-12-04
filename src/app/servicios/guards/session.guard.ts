import { Injectable } from '@angular/core';
import { CanActivate,Router ,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor( public _loginService: LoginService,
    public router: Router){

}

  canActivate(){
    if(this._loginService.comprobarLogin()){
      
      return true;
    }else{
      
      this.router.navigate(['/login']);
      return false;
    }
  }
}
