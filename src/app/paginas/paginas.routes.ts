import { Routes, RouterModule } from "@angular/router";
//Componentes
import { PaginasComponent } from "./paginas.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SessionGuard } from "../servicios/guards/session.guard";
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from "./usuarios/usuario.component";
import { HospitalComponent } from './hospital/hospital.component';
import { HospitalesComponent } from "./hospital/hospitales.component";


const pagesRoutes: Routes=[
    { 
        path:'', 
        component: PaginasComponent,
        canActivate:[SessionGuard],
        children:[
            { path:'dashboard', component: DashboardComponent, data:{ titulo:'Dashboard'},},
            { path:'usuarios', component: UsuariosComponent, data:{ titulo:'Usuarios'},},
            { path:'usuario/:id', component: UsuarioComponent, data:{ titulo:'Usuario'},},
            { path:'hospital/:id', component: HospitalComponent, data:{ titulo:'Hospital'},},
            { path:'hospitales', component: HospitalesComponent, data:{ titulo:'Hospitales'},},
            
            { path:'', redirectTo:'/dashboard', pathMatch:'full' }
        ] }
];
    
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes); 
    