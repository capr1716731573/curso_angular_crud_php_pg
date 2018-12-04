import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalUploadService {
  public tipo:string;
  public id:any;
  public ocultar:string='oculto';

  public notificacion=new EventEmitter<boolean>();
  

  constructor() { 
    
  }

  ocultarModal(){
    this.ocultar='oculto';
    this.tipo=null;
    this.id=null;
  }

  mostrarModal(tipo:string, id:any){
    this.ocultar='';
    this.id=id;
    this.tipo=tipo;
  }
}
