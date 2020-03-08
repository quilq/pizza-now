import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PizzaListComponent],
  imports: [
    CommonModule,
    PizzasRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class PizzasModule { }
