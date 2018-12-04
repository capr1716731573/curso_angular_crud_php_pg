import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { API_REST } from '../configuracion/config_global';

import swal from 'sweetalert';
import { Hospital } from '../modelos/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  url:string=`${API_REST}/hospital`;

    constructor(
    public http:HttpClient
    ) { }

    cargarHospitales(){
      let url=`${this.url}/getAll`;
      return this.http.get(url)
      .pipe(map((resp:any) =>{
          let dato={};
          if(resp.status === 'error'){
            swal('Error - Service Obtener Hospitales',resp.message,'error');
          }else{
            dato=resp.data;
          }
          return dato;
        }))
        .pipe(catchError( err =>{
         
          swal('Error no controlado - Service Obtener Hospitales',err,'error');
          return Observable.throw(err);
        }))
    }

    buscarHospitalId(id:number){
      let url=`${this.url}/getByID/${ id }`;
      return this.http.get(url)
      .pipe(map((resp:any) =>{
          let dato={};
          if(resp.status === 'error'){
            swal('Error - Service Obtener Hospital',resp.message,'error');
          }else{
            dato=resp.data;
          }
          return dato;
        }))
        .pipe(catchError( err =>{
         
          swal('Error no controlado - Service Obtener Hospital',err,'error');
          return Observable.throw(err);
        }))
      }

      guardarHospiatl(hospital:Hospital){
        let url=`${this.url}/insert`;
        return this.http.post(url,hospital)
        .pipe(map((resp:any) =>{
          let dato:any={};
          if(resp.status === 'error'){
            swal('Error - Service Hospital',resp.message,'error');
          }else{
            dato=resp.data;
            swal("Acción Realizada!", "Ingresado el Hospital "+dato.nombre_hospital, "success");
          }
          return dato;
        }))
        .pipe(catchError( err =>{
            swal('Error no controlado - Service Hospital',err,'error');
            return Observable.throw(err);
        }))
      }
      
      actualizarHospital(hospital:Hospital){
        let url=`${this.url}/update`;
        return this.http.post(url,hospital)
        .pipe(map((resp:any) =>{
          let dato:any={};
          if(resp.status === 'error'){
            swal('Error - Service Hospital',resp.message,'error');
          }else{
            dato=resp.data;
            swal("Acción Realizada!", "Ingresado el Hospital "+dato.nombre_hospital, "success");
          }
          return dato;
        }))
        .pipe(catchError( err =>{
            swal('Error no controlado - Service Hospital',err,'error');
            return Observable.throw(err);
        }))
      }
      
      eliminarHospital(hospital:Hospital){
        let url=`${this.url}/delete/${hospital.pk_hospital}`;
        return this.http.get(url)
        .pipe(map((resp:any) =>{
          let dato={};
          if(resp.status === 'error'){
            swal('Error - Service Hospital',resp.message,'error');
            
          }else{
            dato=resp.data;
            
              swal("Eliminación Realizada!", "Ha eliminado al Hospital "+hospital.nombre_hospital, "success");
            
          }
          return dato;
        }))
        .pipe(catchError( err =>{
          
          swal('Error no controlado - Service Hospital',err,'error');
          return Observable.throw(err);
        }));
      }
      }


