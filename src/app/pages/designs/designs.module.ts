import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoModule } from 'src/app/global-components/info/info.module';
import { DesignsComponent } from './designs.component';
import { DesignsRoutingModule } from './designs-routing.module';
import { ScrollingService } from '../../global-services/scrolling.service';
import { LoaderService } from './logos/loader.service';
import { LogosService } from './logos/logos.service';
import { LogoComponent } from './logos/logo/logo.component'

@NgModule({
  imports: [
    CommonModule,   
    DesignsRoutingModule,
    InfoModule
  ],
  declarations: [
    DesignsComponent,
    LogoComponent
  ],
  providers: [
    ScrollingService,
    LoaderService,
    LogosService
  ]
})
export class DesignsModule { }