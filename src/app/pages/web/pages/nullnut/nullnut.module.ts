import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoModule } from 'src/app/global-components/info/info.module';
import { NullnutComponent } from './nullnut.component';
import { NullnutRoutingModule } from './nullnut-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NullnutRoutingModule,
    InfoModule
  ],
  declarations: [
    NullnutComponent
  ]
})
export class NullnutModule { }