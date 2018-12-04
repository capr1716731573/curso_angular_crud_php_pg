import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { Usuario } from '../../modelos/usuario.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  usuario:Usuario;
  pk_user:number=0;

  constructor( public _loginService:LoginService) { 
   this.usuario= JSON.parse(localStorage.getItem('usuario'));
   
  }

  ngOnInit() {

  }

  logout(){
    this._loginService.logout();
  }

}
