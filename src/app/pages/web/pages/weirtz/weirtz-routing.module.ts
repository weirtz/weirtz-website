import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeirtzComponent } from './weirtz.component';


const routes: Routes = [
  {
    path: '',
    component: WeirtzComponent,
    children: [
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeirtzRoutingModule { }