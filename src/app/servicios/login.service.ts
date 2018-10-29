import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FIREBASE_BDD } from '../configuracion/config_global';
import swal from 'sweetalert';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  firebase:string=FIREBASE_BDD+'/persona';

  constructor(public http:HttpClient) { }

 getPersona(){
   let url=`${this.firebase}.json`;
   //Ahora se utiliza pipe en la nueva version de Rxjs 6
   return this.http.get(url).pipe(
   map((resp:any) =>{
      return resp;
   }))
 }
}
