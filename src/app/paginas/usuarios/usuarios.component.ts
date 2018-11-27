
import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { RegisterService } from 'src/app/servicios/register.service';


declare var jQuery;
declare var $;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {
  //variables de paginacion y filter de busqueda
  p: number = 1;
  filter:string='';


  listaUsuarios:any=[];
  constructor( public _registerService:RegisterService){
  }

  ngOnInit(): void {
   this.cargarUsuarios();
  }

  cargarUsuarios(){
    this._registerService.cargarUsuarios()
    .subscribe((resultados:any)=>{
      
      this.listaUsuarios=resultados;
    
    })
  }

  eliminarUsuario(usuario:any){
    swal({
      title: "Esta seguro ?",
      text: "Esta a punto de eliminar al usuario "+ usuario.nombres_user+ " "+usuario.apellidos_user,
      icon: "warning",
      buttons: ['Cancelar', 'Aceptar'],
      dangerMode: true,
    })
    .then((eliminar)=>{
      if(eliminar){
        this._registerService.eliminarUsuario(usuario)
            .subscribe((resp:any)=>{
              this.cargarUsuarios();
            })
      }
    });
     
      
  }
}