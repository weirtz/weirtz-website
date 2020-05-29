import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoModule } from 'src/app/global-components/info/info.module';
import { ApricityComponent } from './apricity.component';
import { ApricityRoutingModule } from './apricity-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ApricityRoutingModule,
    InfoModule
  ],
  declarations: [
    ApricityComponent
  ]
})
export class ApricityModule { }