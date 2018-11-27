import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../servicios/register.service';
import { Usuario } from '../modelos/usuario.model';
import { ProvinciaService } from '../servicios/provincia.service';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['../../assets/css/login_register.css']
})
export class ResgisterComponent implements OnInit {
  usuario:Usuario=new Usuario(0,'','','','',0,'','','');
  pass2:string='';
  provincias:any[]=[];
  constructor( public _usuarioService:RegisterService,
               public _provinciasService:ProvinciaService,
               public router:Router) { }

  ngOnInit() {
    //cargo las provincias
    this._provinciasService.cargarProvincias()
        .subscribe((resp:any)=>{ this.provincias= resp});
  }

  guardarUsuario(formularioUsuario:NgForm){
    console.log(formularioUsuario);
    //console.log("Es valido: "+formularioUsuario.valid);
    //console.log("Cual es el valor: "+formularioUsuario.value);

    if(formularioUsuario.invalid){ return; }

    this._usuarioService.guardarUsuario(this.usuario)
        .subscribe( (usuario:any) => {
          this.usuario=usuario;
          this.router.navigate(['/login']);
        });
  }

  cancelarUsuario(){
    this.usuario=new Usuario(0,'','','','',0,'','','');
  }


 

}
