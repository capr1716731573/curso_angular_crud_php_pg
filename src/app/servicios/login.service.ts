import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { API_REST } from '../configuracion/config_global';

import swal from 'sweetalert';
import { Usuario } from '../modelos/usuario.model';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(public http:HttpClient,
              public router:Router) { }
  
  guardarLocalStorage(usuario:Usuario){
    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

  removerLocalStorage(){
    localStorage.removeItem('usuario');
  }

  comprobarLogin(){
    if(localStorage.getItem('usuario')){
      //comprueba que tenga datos
      if (Object.keys(JSON.parse(localStorage.getItem('usuario'))).length > 0){
        return true;
      }else{
        return false;
      }
      
    }else{
      return false;
    }
  }

  logout(){
    swal({
      title: "Esta seguro ?",
      text: "Esta a punto de cerrar la sesión",
      icon: "warning",
      buttons: ['Cancelar', 'Aceptar'],
      dangerMode: true,
    })
    .then((borrar)=>{
      if(borrar){
        this.removerLocalStorage();
        this.router.navigate(['/login']);  
      }
    });

  }

 
}
