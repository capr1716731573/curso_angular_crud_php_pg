import { Pipe, PipeTransform } from '@angular/core';
import { URL_IMG } from '../configuracion/config_global';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  transform(img: string, tipo: string= 'hospital'): any {
    let url= URL_IMG;

    if (!img){
      return url + '/no-img.jpg';
    }
    //para verificar cuando los usuarios son logueados con la cuenta de google
    if( img.indexOf('https') >= 0){
      return img;
    }

    switch(tipo){
      case 'hospital':
        url+='/hospital/'+img;
      break;

      default:
        console.log('Tipo de Imagen no existe, usuario');
    }

     return url;
  }
}
