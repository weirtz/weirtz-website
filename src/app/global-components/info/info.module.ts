import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BannerComponent
  ],
  exports: [
    BannerComponent
  ]
})

export class InfoModule { }