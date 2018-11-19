import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//Directives
import { MayusculasDirective } from './directivas/mayusculas/mayusculas.directive';
import { NumerosDirective } from './directivas/numeros/numeros.directive';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResgisterComponent } from './login/resgister.component';
import { NoPageFoundComponent } from './login/no-page-found.component';

//Rutas
import { APP_ROUTES } from './app.routes';
//Modulos
import { PaginasModule } from './paginas/paginas.module';
import { ServiciosModule } from './servicios/servicios.module';


@NgModule({
  declarations: [
    MayusculasDirective,
    NumerosDirective,
    AppComponent,
    LoginComponent,
    ResgisterComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,//se utiliza con el formGroup --- Ver pagina de Registros
    APP_ROUTES,
    NgSelectModule,
    PaginasModule,
    ServiciosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
