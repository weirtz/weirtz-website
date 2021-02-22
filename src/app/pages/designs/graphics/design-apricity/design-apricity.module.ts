import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignApricityComponent } from './design-apricity.component';
import { DesignApricityRoutingModule } from './design-apricity-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DesignApricityRoutingModule,
  ],
  declarations: [
    DesignApricityComponent
  ]
})
export class DesignApricityModule { }