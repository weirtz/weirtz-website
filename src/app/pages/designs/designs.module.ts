import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoModule } from 'src/app/global-components/info/info.module';
import { DesignsComponent } from './designs.component';
import { DesignsRoutingModule } from './designs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DesignsRoutingModule,
    InfoModule
  ],
  declarations: [
    DesignsComponent
  ]
})
export class DesignsModule { }