import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

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
  ]
})

export class NavigationModule { }