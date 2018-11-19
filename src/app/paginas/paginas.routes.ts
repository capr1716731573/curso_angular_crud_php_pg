import { Routes, RouterModule } from "@angular/router";
//Componentes
import { PaginasComponent } from "./paginas.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SessionGuard } from "../servicios/guards/session.guard";


const pagesRoutes: Routes=[
    { 
        path:'', 
        component: PaginasComponent,
        canActivate:[SessionGuard],
        children:[
            { path:'dashboard', component: DashboardComponent, data:{ titulo:'Dashboard'},},
            
            { path:'', redirectTo:'/dashboard', pathMatch:'full' }
        ] }
];
    
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes); 
    