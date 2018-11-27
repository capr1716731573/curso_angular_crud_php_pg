import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from "../layout/layout.module";
import { PAGES_ROUTES } from "./paginas.routes";
import { PaginasComponent } from './paginas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalComponent } from './hospital/hospital.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { UsuarioComponent } from './usuarios/usuario.component';
import { HospitalesComponent } from './hospital/hospitales.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    PAGES_ROUTES
    , NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule

  ],
  declarations: [
    PaginasComponent,
    DashboardComponent,
    UsuariosComponent,
    HospitalComponent,
    UsuarioComponent,
    HospitalesComponent
    
  ]
})
export class PaginasModule { }
