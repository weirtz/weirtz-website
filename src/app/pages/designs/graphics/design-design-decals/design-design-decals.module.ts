import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignDesignDecalsComponent } from './design-design-decals.component'
import { DesignDesignDecalsRoutingModule } from './design-design-decals-routing.module'
import { InfoModule } from 'src/app/global-components/info/info.module';

@NgModule({
  imports: [
    CommonModule,
    DesignDesignDecalsRoutingModule,
    InfoModule
  ],
  declarations: [
    DesignDesignDecalsComponent
  ]
})

export class DesignDesignDecalsModule { }