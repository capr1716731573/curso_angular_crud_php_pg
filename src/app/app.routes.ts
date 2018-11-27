import { Routes, RouterModule } from "@angular/router";
//Componentes
import { LoginComponent } from './login/login.component';
import { ResgisterComponent } from "./login/resgister.component";
import { NoPageFoundComponent } from './login/no-page-found.component';
import { PruebaTableComponent } from './login/prueba-table.component';


const appRoutes: Routes=[
    

   
    { path:'login', component: LoginComponent },
    { path:'register', component: ResgisterComponent },
    { path:'prueba', component: PruebaTableComponent },
   
    //{ path:'', redirectTo:'/dashboard', pathMatch:'full' },
    { path:'**', component: NoPageFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash:true });