import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { API_REST } from '../configuracion/config_global';

import swal from 'sweetalert';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url:string=`${API_REST}/usuarios`;
  constructor(
    public http:HttpClient
    ) { }
  
  cargarUsuarios(){
    let url=`${this.url}/getAll`;
    return this.http.get(url)
    .pipe(map((resp:any) =>{
        let dato={};
        if(resp.status === 'error'){
          swal('Error - Service Obtener Usuarios',resp.message,'error');
        }else{
          dato=resp.data;
        }
        return dato;
      }))
      .pipe(catchError( err =>{
       
        swal('Error no controlado - Service Obtener Usuarios',err,'error');
        return Observable.throw(err);
      }))
  }
  
  buscarUsuarioId(id:number){
    let url=`${this.url}/getByID/${ id }`;
    return this.http.get(url)
    .pipe(map((resp:any) =>{
        let dato={};
        if(resp.status === 'error'){
          swal('Error - Service Obtener Usuario',resp.message,'error');
        }else{
          dato=resp.data;
        }
        return dato;
      }))
      .pipe(catchError( err =>{
       
        swal('Error no controlado - Service Obtener Usuario',err,'error');
        return Observable.throw(err);
      }))
    }
  
    buscarUsuarioUserPass(credenciales:any){
      let url=`${this.url}/getByUserPass`;
      return this.http.post(url,credenciales)
      .pipe(map((resp:any) =>{
          let dato={};
          if(resp.status === 'error'){
            swal('Error - Service Comprobar credenciales de usuario',resp.message,'error');
          }else{
            dato=resp.data;
          }
          return dato;
        }))
        .pipe(catchError( err =>{
         
          swal('Error no controlado - Service Comprobar credenciales de usuario',err,'error');
          return Observable.throw(err);
        }))
      }

  guardarUsuario(usuario:any){
    let url=`${this.url}/insert`;
    return this.http.post(url,usuario)
    .pipe(map((resp:any) =>{
      let dato:any={};
      if(resp.status === 'error'){
        swal('Error - Service Usuario',resp.message,'error');
      }else{
        dato=resp.data;
        swal("Acción Realizada!", "Ingresado el usuario "+dato.nombres_user+" "+dato.apellidos_user, "success");
      }
      return dato;
    }))
    .pipe(catchError( err =>{
        swal('Error no controlado - Service Usuario',err,'error');
        return Observable.throw(err);
    }))
  }
  
  actualizarUsuario(usuario:any){
    let url=`${this.url}/update`;
    return this.http.post(url,usuario)
    .pipe(map((resp:any) =>{
      let dato:any={};
      if(resp.status === 'error'){
        swal('Error - Service Usuario',resp.message,'error');
      }else{
        dato=resp.data;
        swal("Acción Realizada!", "Ingresado el usuario "+dato.nombres_user+" "+dato.apellidos_user, "success");
      }
      return dato;
    }))
    .pipe(catchError( err =>{
        swal('Error no controlado - Service Usuario',err,'error');
        return Observable.throw(err);
    }))
  }
  
  eliminarUsuario(usuario){
    let url=`${this.url}/delete/${usuario.pk_user}`;
    return this.http.get(url)
    .pipe(map((resp:any) =>{
      let dato={};
      if(resp.status === 'error'){
        swal('Error - Service Usuario',resp.message,'error');
        
      }else{
        dato=resp.data;
        
          swal("Eliminación Realizada!", "Ha eliminado al usuario "+usuario.nombres_user, "success");
        
      }
      return dato;
    }))
    .pipe(catchError( err =>{
      
      swal('Error no controlado - Service Usuario',err,'error');
      return Observable.throw(err);
    }));
  }
  }
  
}
