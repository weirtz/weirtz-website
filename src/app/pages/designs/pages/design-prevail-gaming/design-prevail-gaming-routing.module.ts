import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignPrevailGamingComponent } from './design-prevail-gaming.component';


const routes: Routes = [
  { path: '', component: DesignPrevailGamingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DesignPrevailGamingRoutingModule { }