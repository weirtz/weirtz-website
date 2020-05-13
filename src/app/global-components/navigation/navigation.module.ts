import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavComponent,
    FooterComponent,
    ProgressBarComponent,
    BreadcrumbComponent
  ]
})

export class NavigationModule { }