import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignDesignDecalsComponent } from './design-design-decals.component'
import { DesignDesignDecalsRoutingModule } from './design-design-decals-routing.module'

@NgModule({
  imports: [
    CommonModule,
    DesignDesignDecalsRoutingModule
  ],
  declarations: [
    DesignDesignDecalsComponent
  ]
})

export class DesignDesignDecalsModule { }