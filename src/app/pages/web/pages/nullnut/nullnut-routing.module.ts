import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NullnutComponent } from './nullnut.component';

const routes: Routes = [
  {
    path: '',
    component: NullnutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NullnutRoutingModule { }