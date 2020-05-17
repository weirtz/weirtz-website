import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignPixelSortingComponent } from './design-pixel-sorting.component';
import { ImageLightboxComponent } from 'src/app/global-components/utilities/image-lightbox/image-lightbox.component';


const routes: Routes = [
  { path: '', component: DesignPixelSortingComponent, children: [
    { path: ':id', component: ImageLightboxComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignPixelSortingRoutingModule { }