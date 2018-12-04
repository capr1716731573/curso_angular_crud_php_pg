import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { RegisterService } from './register.service';
import { HospitalService } from './hospital.service';
import { ProvinciaService } from './provincia.service';
import { SubirArchivoService } from './subir-archivo.service';
import { ModalUploadService } from '../componentes/modal-upload/modal-upload.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    LoginService,
    RegisterService,
    HospitalService,
    ProvinciaService,
    SubirArchivoService,
    ModalUploadService
  ],
  declarations:[]
})
export class ServiciosModule { }
