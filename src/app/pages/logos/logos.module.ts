import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogosComponent } from './logos.component';
import { LogoComponent } from './logo/logo.component';
import { LogosRoutingModule } from './logos-routing.module';
import { ScrollingService } from '../../global-services/scrolling.service';
import { InfoModule } from '../../global-components/info/info.module'
import { LoaderService } from './loader.service';

@NgModule({
  imports: [
    CommonModule,
    LogosRoutingModule,
    InfoModule
  ],
  declarations: [
    LogosComponent,
    LogoComponent
  ],
  providers: [
    ScrollingService,
    LoaderService
  ]
})

export class LogosModule { }