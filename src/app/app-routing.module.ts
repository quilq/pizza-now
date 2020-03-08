import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'pizzas',
    loadChildren: () => import('./pizzas/pizzas.module').then(m => m.PizzasModule)
  },
  {
    path: 'drinks',
    loadChildren: () => import('./drinks/drinks.module').then(m => m.DrinksModule)
  },
  {
    path: 'sides',
    loadChildren: () => import('./sides/sides.module').then(m => m.SidesModule)
  },
  {
    path: '',
    redirectTo: 'pizza',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
