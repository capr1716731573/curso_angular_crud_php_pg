import { Routes, RouterModule } from "@angular/router";
//Componentes
import { PaginasComponent } from "./paginas.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


const pagesRoutes: Routes=[
    { 
        path:'', 
        component: PaginasComponent,
        //canActivate:[LoginGuards],
        children:[
            { path:'dashboard', component: DashboardComponent, data:{ titulo:'Dashboard'},},
            
            { path:'', redirectTo:'/dashboard', pathMatch:'full' }
        ] }
];
    
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes); 
    