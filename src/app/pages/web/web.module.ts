import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';
import { WebRoutingModule } from './web-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WebRoutingModule
  ],
  declarations: [
    WebComponent
  ]
})
export class WebModule { }