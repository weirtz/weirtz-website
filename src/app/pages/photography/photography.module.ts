import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotographyComponent } from './photography.component';

import { PhotographyRoutingModule } from './photography-routing.module';
import { ScrollingService } from '../../global-services/scrolling.service';
import { InfoModule } from 'src/app/global-components/info/info.module';

import { ImageLightboxModule } from '../../global-components/utilities/image-lightbox/image-lightbox.module';

@NgModule({
  imports: [
    CommonModule,
    PhotographyRoutingModule,
    InfoModule,
    ImageLightboxModule
    ],
  declarations: [
    PhotographyComponent,
  ],
  providers: [
    ScrollingService
  ]
})

export class PhotographyModule { }