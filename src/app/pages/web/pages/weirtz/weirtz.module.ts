import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoModule } from 'src/app/global-components/info/info.module';
import { WeirtzComponent } from './weirtz.component';
import { WeirtzRoutingModule } from './weirtz-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WeirtzRoutingModule,
    InfoModule
  ],
  declarations: [
    WeirtzComponent
  ]
})
export class WeirtzModule { }