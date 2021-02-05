import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { BannerComponent } from './banner/banner.component';
import { BannerTwoComponent } from './banner-two/banner-two.component';
import { BannerImageComponent } from './banner-image/banner-image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BannerComponent,
    BannerTwoComponent,
    BannerImageComponent
  ],
  exports: [
    BannerComponent,
    BannerTwoComponent,
    BannerImageComponent
  ]
})

export class InfoModule { }