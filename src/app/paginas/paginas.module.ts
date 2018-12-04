import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from "../layout/layout.module";
import { PAGES_ROUTES } from "./paginas.routes";
import { PipesModule } from '../pipes/pipes.module';


import { PaginasComponent } from './paginas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalComponent } from './hospital/hospital.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { UsuarioComponent } from './usuarios/usuario.component';
import { HospitalesComponent } from './hospital/hospitales.component';
import { ComponentesModule } from '../componentes/componentes.module';

//Directivas
import { MayusculasDirective } from "../directivas/mayusculas/mayusculas.directive";
import { NumerosDirective } from "../directivas/numeros/numeros.directive";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    PAGES_ROUTES,
    PipesModule,
    ComponentesModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule

  ],
  declarations: [
    MayusculasDirective,
    NumerosDirective,
    PaginasComponent,
    DashboardComponent,
    UsuariosComponent,
    HospitalComponent,
    UsuarioComponent,
    HospitalesComponent
    
  ],
  exports:[
    MayusculasDirective,
    NumerosDirective
  ]
})
export class PaginasModule { }
