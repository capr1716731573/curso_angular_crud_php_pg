import { Injectable } from '@angular/core';
import { CanActivate,Router ,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
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
      console.log('PASO EL GUARD');
      return true;
    }else{
      console.log('NO PASO EL GUARD');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
