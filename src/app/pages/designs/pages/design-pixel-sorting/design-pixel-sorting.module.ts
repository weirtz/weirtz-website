import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignPixelSortingComponent } from './design-pixel-sorting.component';
import { DesignPixelSortingRoutingModule } from './design-pixel-sorting-routing.module';
import { NavigationModule } from 'src/app/global-components/navigation/navigation.module'
import { ScrollingService } from 'src/app/global-services/scrolling.service';
import { PixelsortingService } from './pixelsorting.service';
import { ImageLightboxModule } from 'src/app/global-components/utilities/image-lightbox/image-lightbox.module';

@NgModule({
  imports: [
    CommonModule,
    DesignPixelSortingRoutingModule,
    NavigationModule,
    ImageLightboxModule
  ],
  declarations: [
    DesignPixelSortingComponent
  ],
  providers: [
      ScrollingService,
      PixelsortingService
  ]
})
export class DesignPixelSortingModule { }