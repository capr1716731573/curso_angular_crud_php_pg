import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  constructor( public _loginService:LoginService) { }

  ngOnInit() {
  }

  logout(){
    this._loginService.logout();
  }

}
