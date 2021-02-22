import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignPrevailGamingRoutingModule } from './design-prevail-gaming-routing.module';
import { DesignPrevailGamingComponent } from './design-prevail-gaming.component';
import { InfoModule } from 'src/app/global-components/info/info.module';


@NgModule({
  imports: [
    CommonModule,
    DesignPrevailGamingRoutingModule,
    InfoModule
  ],
  declarations: [
    DesignPrevailGamingComponent
  ]
})

export class DesignPrevailGamingModule { }