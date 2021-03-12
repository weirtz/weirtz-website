import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyEmailComponent } from './verify-email.component';
import { VerifyEmailRoutingModule } from './verify-email-routing.module';


@NgModule({
  imports: [
    CommonModule,
    VerifyEmailRoutingModule
  ],
  declarations: [
    VerifyEmailComponent,
  ],
  providers: [
  ]
})

export class VerifyEmailModule { }