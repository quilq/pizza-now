import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DrinksRoutingModule } from './drinks-routing.module';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [DrinkListComponent],
  imports: [
    CommonModule,
    DrinksRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class DrinksModule { }
