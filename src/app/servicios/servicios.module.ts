import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { RegisterService } from './register.service';
import { HospitalService } from './hospital.service';
import { ProvinciaService } from './provincia.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    LoginService,
    RegisterService,
    HospitalService,
    ProvinciaService
  ],
  declarations:[]
})
export class ServiciosModule { }
