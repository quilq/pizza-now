import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaRoutingModule } from './pizza-routing.module';
import { PizzaListComponent } from './pizza-list/pizza-list.component';


@NgModule({
  declarations: [PizzaListComponent],
  imports: [
    CommonModule,
    PizzaRoutingModule
  ]
})
export class PizzaModule { }
