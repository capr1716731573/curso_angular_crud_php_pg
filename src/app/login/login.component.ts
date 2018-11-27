import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../servicios/register.service';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';

import swal from 'sweetalert';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/login_register.css']
})
export class LoginComponent implements OnInit {
  credenciales:login={
    usuario:'',
    password:''
  };

  constructor( public _loginService:LoginService,
               public _usuarioService:RegisterService,
               public router:Router
               ) { }

  ngOnInit() {
   
  }

  login(formularioLogin:NgForm){
   
    if(formularioLogin.invalid){ return; }

    this._usuarioService.buscarUsuarioUserPass(this.credenciales)
        .subscribe( (usuario:any) => {
          
          //comprueba que el objeto devuelto tenga datos
          if(Object.keys(usuario).length > 0){
            this._loginService.guardarLocalStorage(usuario);
            this.router.navigate(['/dashboard']);
          }else{
            swal('Error Credenciales','Nombre de usuario o contrasena incorrectas','error');
            this.credenciales.usuario='';
            this.credenciales.password='';
          }
        });
  }
  

}

export interface login{
  usuario:string,
  password:string
}
