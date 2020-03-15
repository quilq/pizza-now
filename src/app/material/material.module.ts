import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule
  ]
})

export class MaterialModule { }
