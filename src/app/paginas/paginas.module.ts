import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from "../layout/layout.module";
import { PAGES_ROUTES } from "./paginas.routes";
import { PaginasComponent } from './paginas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalComponent } from './hospital/hospital.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    PAGES_ROUTES
  ],
  declarations: [
    PaginasComponent,
    DashboardComponent,
    UsuariosComponent,
    HospitalComponent
  ]
})
export class PaginasModule { }
