import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotographyComponent } from './photography.component';
import { ImageLightboxComponent } from '../../global-components/utilities/image-lightbox/image-lightbox.component';


const routes: Routes = [
    {
        path: '',
        component: PhotographyComponent,
        children: [
            {
                path: ':id',
                component: ImageLightboxComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PhotographyRoutingModule { }