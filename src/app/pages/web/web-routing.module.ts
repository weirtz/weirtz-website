import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebComponent } from './web.component';


const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      {path: 'weirtz', loadChildren: () => import('./pages/weirtz/weirtz.module').then(m => m.WeirtzModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }