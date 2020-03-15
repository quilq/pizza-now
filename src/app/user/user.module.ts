import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class UserModule { }
