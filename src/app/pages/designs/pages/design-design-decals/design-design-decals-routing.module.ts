import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignDesignDecalsComponent } from './design-design-decals.component';


const routes: Routes = [
  { path: '', component: DesignDesignDecalsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DesignDesignDecalsRoutingModule { }