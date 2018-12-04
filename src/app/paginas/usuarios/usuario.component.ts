import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { RegisterService } from 'src/app/servicios/register.service';
import { ProvinciaService } from 'src/app/servicios/provincia.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  usuario:Usuario=new Usuario(0,'','','','',0,'','','');
  provincias:any[]=[];
  id:any;
  pass2:string;

  constructor( public _usuarioService:RegisterService,
               public _provinciasService:ProvinciaService,
               public router:Router,
               public activatedRoute:ActivatedRoute) {

                  this.activatedRoute.params.subscribe(params =>{
                    this.id=params['id'];//es el mismo nombre que las pagesRoutes
                    if(this.id !== 'nuevo'){
                      this.cargarUsuario(this.id);
                    }
                  })

                }

  ngOnInit() {
    this.cargarProvincias();


  }

  cargarUsuario(id){

    this._usuarioService.buscarUsuarioId(id)
        .subscribe((usuarioCarga:any) => {
          this.usuario=usuarioCarga;
        });
  }

  cargarProvincias(){
     //cargo las provincias
     this._provinciasService.cargarProvincias()
     .subscribe((resp:any)=>{ this.provincias= resp});
  }

  cancelarUsuario(){
    this.router.navigate(['/usuarios']);
    console.log("cancelarUsuario()");
  }

  guardarUsuario(formularioUsuario:NgForm){
    if(formularioUsuario.invalid){ return; }
    
    if(this.id === 'nuevo'){
      this._usuarioService.guardarUsuario(this.usuario)
        .subscribe( (usuario:any) => {
        this.usuario=usuario;
        this.router.navigate(['/ususario',this.usuario.pk_user]);
      });
    }else{
      this._usuarioService.actualizarUsuario(this.usuario)
        .subscribe( (usuario:any) => {
        this.usuario=usuario;
        
      });
    }
  }

}
