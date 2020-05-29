import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApricityComponent } from './apricity.component';

const routes: Routes = [
  {
    path: '',
    component: ApricityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApricityRoutingModule { }