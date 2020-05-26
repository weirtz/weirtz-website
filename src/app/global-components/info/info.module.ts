import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { BannerComponent } from './banner/banner.component';
import { BannerTwoComponent } from './banner-two/banner-two.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BannerComponent,
    BannerTwoComponent
  ],
  exports: [
    BannerComponent,
    BannerTwoComponent
  ]
})

export class InfoModule { }