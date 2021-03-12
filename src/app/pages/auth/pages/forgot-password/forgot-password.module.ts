import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule
  ],
  declarations: [
    ForgotPasswordComponent,
  ],
  providers: [
  ]
})

export class ForgotPasswordModule { }