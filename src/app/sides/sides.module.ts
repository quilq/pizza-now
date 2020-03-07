import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidesRoutingModule } from './sides-routing.module';
import { SidesListComponent } from './sides-list/sides-list.component';


@NgModule({
  declarations: [SidesListComponent],
  imports: [
    CommonModule,
    SidesRoutingModule
  ]
})
export class SidesModule { }
