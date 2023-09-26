import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes, provideRouter } from '@angular/router';
import { SportsComponent } from './forms/sports/sports.component';
import { CardItemComponent } from './components/card/card-item/card-item.component';
import { groceryComponent } from './forms/grocery/grocery.component';
import { PageNotFoundComponent } from './forms/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'sports', component: SportsComponent}, // Eagerly loading route
  { path: 'sports', loadComponent: () => import('./forms/sports/sports.component')
  .then(m => m.SportsComponent) }, // Lazily loading route
  {path: 'grocery', component: groceryComponent}, 
  { path: 'sports/card-item/:id', component: CardItemComponent},

  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'grocery', component: groceryComponent}, 
  { path: 'grocery', loadComponent: () => import('./forms/grocery/grocery.component')
  .then(m => m.groceryComponent) },// Lazily loading route
  { path: 'grocery/card-item/:id', component: CardItemComponent},

  { path: 'home', loadComponent: () => import('./forms/home/home.component')
  .then(m => m.HomeComponent) }, // Lazily loading route

  {path: '**', component: PageNotFoundComponent}, 
];
export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(),
  provideRouter(routes)]
};
