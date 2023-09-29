import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes, provideRouter } from '@angular/router';
import { SportsComponent } from './forms/sports/sports.component';
import { CardItemComponent } from './components/card/card-item/card-item.component';
import { groceryComponent } from './forms/grocery/grocery.component';
import { PageNotFoundComponent } from './forms/page-not-found/page-not-found.component';
import { authGuard } from './auth/auth.constants';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'sports', component: SportsComponent}, // Eagerly loading route
  { path: 'sports', loadComponent: () => import('./forms/sports/sports.component')
  .then(m => m.SportsComponent) }, // Lazily loading route
  { path: 'sports/card-item/:id', component: CardItemComponent},


  // {path: 'grocery', component: groceryComponent}, 
  // { path: 'grocery', loadChildren: () => import('./forms/grocery/grocery.component')
  // .then(m => m.groceryComponent) },// Lazily loading route
  // { path: 'grocery/card-item/:id', component: CardItemComponent},

  {path: 'grocery', 
  canActivate: [authGuard],
  loadComponent: () => import('./forms/grocery/grocery.component').then(m => m.groceryComponent)},


  { path: 'home', loadComponent: () => import('./forms/home/home.component')
  .then(m => m.HomeComponent) }, // Lazily loading route

  {path: '**', component: PageNotFoundComponent}, 
];
export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(),
  provideRouter(routes)]
};
