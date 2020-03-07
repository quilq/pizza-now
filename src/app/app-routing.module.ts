import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'pizza',
    loadChildren: () => import('./pizzas/pizza.module').then(m => m.PizzaModule)
  },
  {
    path: 'drink',
    loadChildren: () => import('./drinks/drink.module').then(m => m.DrinkModule)
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
