import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkRoutingModule } from './drink-routing.module';
import { DrinkListComponent } from './drink-list/drink-list.component';


@NgModule({
  declarations: [DrinkListComponent],
  imports: [
    CommonModule,
    DrinkRoutingModule
  ]
})
export class DrinkModule { }
