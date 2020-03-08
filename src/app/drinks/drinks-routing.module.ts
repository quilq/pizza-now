import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrinkListComponent } from './drink-list/drink-list.component';

const routes: Routes = [
  {
    path: '',
    component: DrinkListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinksRoutingModule { }
