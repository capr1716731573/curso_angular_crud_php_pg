import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../modelos/hospital.model';
import { HospitalService } from '../../servicios/hospital.service';
import { ModalUploadService } from 'src/app/componentes/modal-upload/modal-upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {
   //variables de paginacion y filter de busqueda
   p: number = 1;
   filter:string='';

   listaHospitales:any=[];
   
  constructor(public _hospitalService:HospitalService,
              public _modalUploadImageService:ModalUploadService,
              public router:Router) { }

  ngOnInit() {
    this.cargarHospitales();

    //actualiza cambios de imagen despues de utilziar el modal
    this._modalUploadImageService.notificacion
        .subscribe( resp => {
          this.cargarHospitales();
         
        });
   }


   emitModal(){
      //actualiza cambios de imagen despues de utilziar el modal
   
      this.cargarHospitales();
     
  
   }
   
  //cambia la imagen del hospital
  mostrarModal(id:number){
    this._modalUploadImageService.mostrarModal('hospital',id);
    
  }
 
   cargarHospitales(){
     this._hospitalService.cargarHospitales()
     .subscribe((resultados:any)=>{
      
       this.listaHospitales=resultados;
     
     })
   }
 
   eliminarHospital(hospital:Hospital){
     swal({
       title: "Esta seguro ?",
       text: "Esta a punto de eliminar al Hospital "+ hospital.nombre_hospital,
       icon: "warning",
       buttons: ['Cancelar', 'Aceptar'],
       dangerMode: true,
     })
     .then((eliminar)=>{
       if(eliminar){
         this._hospitalService.eliminarHospital(hospital)
             .subscribe((resp:any)=>{
               this.cargarHospitales();
             })
       }
     });
      
       
   }
}
