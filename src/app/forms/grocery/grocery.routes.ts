import { Routes } from "@angular/router";
import { groceryComponent } from "./grocery.component";
import { CardItemComponent } from "src/app/components/card/card-item/card-item.component";


export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'grocery', component: groceryComponent },
    {path:'card-item/:id',component:CardItemComponent}
  
  ];