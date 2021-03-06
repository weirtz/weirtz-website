import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';
import { WebRoutingModule } from './web-routing.module';
import { InfoModule } from 'src/app/global-components/info/info.module';
import { WebService } from './web.service';
import { AngularTiltModule } from 'angular-tilt';

@NgModule({
  imports: [
    CommonModule,
    WebRoutingModule,
    InfoModule,
    AngularTiltModule
  ],
  declarations: [
    WebComponent
    ],
  providers: [
    WebService
  ]
})
export class WebModule { }