import { Injectable } from '@angular/core';
import { API_REST } from '../configuracion/config_global';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {
  constructor() { }

  subirArchivo( archivo:File, tipo:string, id:string){

    //creamos la promesa, que adentro utilizara AJAX
    return new Promise((resolve,reject)=>{
      //Aqui utilizamos Vanilla JS puro
      let formData=new FormData();
      let xhr= new XMLHttpRequest();

      formData.append('archivos_enviados',archivo,archivo.name);
      //aqui ejecuto AJAX
      xhr.onreadystatechange=function (){
        if( xhr.readyState === 4){
          if( xhr.status == 200){
            console.log('Imagen Subida');
            resolve(JSON.parse(xhr.response));
          }else{
            console.log('Imagen no subida problemas');
            reject(JSON.parse(xhr.response));
          }
        }
      };

      let url=API_REST+'/upload/subir-archivo/'+tipo+'/'+id;

      xhr.open('POST', url,true);
      xhr.send( formData);


    })

 

  }
}
