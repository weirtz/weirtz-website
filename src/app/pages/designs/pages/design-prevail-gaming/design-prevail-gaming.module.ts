import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignPrevailGamingRoutingModule } from './design-prevail-gaming-routing.module';
import { DesignPrevailGamingComponent } from './design-prevail-gaming.component';


@NgModule({
  imports: [
    CommonModule,
    DesignPrevailGamingRoutingModule
  ],
  declarations: [
    DesignPrevailGamingComponent
  ]
})

export class DesignPrevailGamingModule { }