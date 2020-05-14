import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';
import { WebRoutingModule } from './web-routing.module';
import { InfoModule } from 'src/app/global-components/info/info.module';

@NgModule({
  imports: [
    CommonModule,
    WebRoutingModule,
    InfoModule
  ],
  declarations: [
    WebComponent
  ]
})
export class WebModule { }