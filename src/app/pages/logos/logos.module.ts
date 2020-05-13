import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogosComponent } from './logos.component';
import { LogoComponent } from './logo/logo.component';
import { LogosRoutingModule } from './logos-routing.module';
import { ScrollingService } from '../../global-services/scrolling.service';

@NgModule({
  imports: [
    CommonModule,
    LogosRoutingModule
  ],
  declarations: [
    LogosComponent,
    LogoComponent
  ],
  providers: [
    ScrollingService 
  ]
})

export class LogosModule { }