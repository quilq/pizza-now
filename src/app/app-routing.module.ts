import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';

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
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '',  //default path
    redirectTo: '/pizzas',  //with leading slash ("/"): absolute route; with "./": relative route
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
