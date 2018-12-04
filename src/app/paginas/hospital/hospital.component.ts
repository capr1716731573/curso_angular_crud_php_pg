import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from 'src/app/servicios/provincia.service';
import { HospitalService } from '../../servicios/hospital.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Hospital } from '../../modelos/hospital.model';
import { NgForm } from '@angular/forms';
import { ModalUploadService } from 'src/app/componentes/modal-upload/modal-upload.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styles: []
})
export class HospitalComponent implements OnInit {

  hospital:Hospital=new Hospital(0,"",0,"","");
  listaProvincias:any[]=[];
  id:any;

  constructor( public _provinciaService:ProvinciaService,
               public _hospitalService:HospitalService,
               public router:Router,
               public activatedRoute:ActivatedRoute,
               public _modalUploadService:ModalUploadService) { 
                 
                this.activatedRoute.params.subscribe(params =>{
                    this.id=params['id'];
                    if(this.id !== 'nuevo'){
                      this.cargarHospital(this.id);
                    }        
                })
               }

  ngOnInit() {
    this.cargarProvincias();
     //actualiza cambios de imagen despues de utilziar el modal
     this._modalUploadService.notificacion
     .subscribe( resp => {
       this.cargarHospital(this.id);
      
     });
  }

  cargarHospital(id){

    this._hospitalService.buscarHospitalId(id)
        .subscribe((hospitalCarga:any) => {
          this.hospital=hospitalCarga;
          //console.log(JSON.stringify(this.hospital));
        });
  }

  cargarProvincias(){
    //cargo las provincias
    this._provinciaService.cargarProvincias()
    .subscribe((resp:any)=>{ this.listaProvincias= resp});
 }

 cancelarHospital(){
  this.router.navigate(['/hospitales']);
}

guardarHospital(formularioHospital:NgForm){
  if(formularioHospital.invalid){ return; }
  
  if(this.id === 'nuevo'){
    this._hospitalService.guardarHospiatl(this.hospital)
      .subscribe( (hospital:any) => {
      this.hospital=hospital;
      this.router.navigate(['/hospital',this.hospital.pk_hospital]);
    });
  }else{
    this._hospitalService.actualizarHospital(this.hospital)
      .subscribe( (hospital:any) => {
      this.hospital=hospital;
      
    });
  }
}

cambiarFoto(){
  this._modalUploadService.mostrarModal('hospital',this.hospital.pk_hospital);
}
}
