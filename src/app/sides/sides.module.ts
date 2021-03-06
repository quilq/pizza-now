import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidesRoutingModule } from './sides-routing.module';
import { SidesListComponent } from './sides-list/sides-list.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [SidesListComponent],
  imports: [
    CommonModule,
    SidesRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SidesModule { }
