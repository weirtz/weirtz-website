import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageLightboxComponent } from 'src/app/global-components/utilities/image-lightbox/image-lightbox.component';
import { PhotographyService } from '../../../pages/photography/photography.service';
import { PixelsortingService } from 'src/app/pages/designs/pages/design-pixel-sorting/pixelsorting.service';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    ImageLightboxComponent
  ],
  providers: [
    PixelsortingService,
    PhotographyService
  ]
})

export class ImageLightboxModule { }