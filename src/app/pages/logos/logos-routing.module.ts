import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoComponent } from '../logos/logo/logo.component';
import { LogosComponent } from '../logos/logos.component';


const routes: Routes = [
  {
    path: '',
    component: LogosComponent,
    children: [
      {
        path: ':name',
        component: LogoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LogosRoutingModule { }