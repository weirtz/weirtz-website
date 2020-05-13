import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutModule } from './about.module';


const routes: Routes = [
  {
    path: '',
    component: AboutModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AboutRoutingModule { }