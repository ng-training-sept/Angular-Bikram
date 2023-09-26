import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found.component";



export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'page-not-found', component: PageNotFoundComponent },
   
  
  ];