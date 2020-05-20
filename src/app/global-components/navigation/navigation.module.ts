import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ScrollingService } from 'src/app/global-services/scrolling.service';

@NgModule({
  imports: [
    CommonModule
    ],
  declarations: [
    FooterComponent,
    BreadcrumbComponent
  ],
  exports: [
    CommonModule,
    FooterComponent,
    BreadcrumbComponent
  ],
  providers: [
    ScrollingService
  ]
})

export class NavigationModule { }