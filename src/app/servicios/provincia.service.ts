import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { API_REST } from '../configuracion/config_global';


@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  url:string=`${API_REST}/provincia`;
  
  constructor(
    public http:HttpClient
    ) { }

  cargarProvincias(){
    let url=`${this.url}/getAll`;
    return this.http.get(url)
    .pipe(map((resp:any) =>{
      let dato:any={};
      if(resp.status === 'error'){
        swal('Error - Service Provincias',resp.message,'error');
      }else{
        dato=resp.data;
      }
      return dato;
    }))
    .pipe(catchError( err =>{
        swal('Error no controlado - Service Provincias',err,'error');
        return Observable.throw(err);
    }))
  }
}
