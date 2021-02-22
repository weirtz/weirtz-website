import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignApricityComponent } from './design-apricity.component';

const routes: Routes = [
  {path: '', component: DesignApricityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignApricityRoutingModule { }