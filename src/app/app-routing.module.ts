//Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'about', component: AboutComponent},
    { path: 'logos', loadChildren: () => import('./pages/logos/logos.module').then(m => m.LogosModule)
    // [
    //   {path: ':name', component: LogoComponent}
    // ]
  },
    { path: 'web', 
      loadChildren: () => import('./pages/web/web.module').then(m => m.WebModule)
    },
    { path: 'photography', component: PhotographyComponent, children: [
      {path: ':id', component: ImageLightboxComponent}
    ] },
    { path: 'contact', component: ContactComponent },

    //Special pages on /designs otehrwise fall back to children 
    {path: 'designs/pixel-sorting', component: DesignPixelSortingComponent, children: [
      { path: ':id', component: ImageLightboxComponent }
    ]},
    {path: 'designs/apricity-media-group', component: DesignApricityComponent},
    {path: 'designs/design-decals', component: DesignDesignDecalsComponent},
    {path: 'designs/prevail-gaming', component: DesignPrevailGamingComponent},

    { path: 'designs', component: DesignsComponent, children: [
      //Fall back to these if no special page is available.
      {path: ':url', component: DesignComponent},
    ]},
    { path:'games', component: GamesComponent, children: [
      {path:':game', component: GameComponent}
    ]},
    //keep ** as last route. Redirect not neccessary if you want to preserve link.
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}