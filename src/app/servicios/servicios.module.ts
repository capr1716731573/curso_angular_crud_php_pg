import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { RegisterService } from './register.service';
import { HospitalService } from './hospital.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    LoginService,
    RegisterService,
    HospitalService
  ],
  declarations:[]
})
export class ServiciosModule { }
