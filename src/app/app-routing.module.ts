//Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Global
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Pages to route
import { AboutComponent } from './about/about.component';
import { LogosComponent } from './logos/logos.component';
import { WebComponent } from './web/web.component';
import { PhotographyComponent } from './photography/photography.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game/game.component';
import { DesignsComponent } from './designs/designs.component';
import { DesignComponent } from './designs/design/design.component';
import { ContactComponent } from './contact/contact.component';
import { LogoComponent } from './logos/logo/logo.component';
import { DesignPixelSortingComponent } from './designs/special-pages/design-pixel-sorting/design-pixel-sorting.component';
import { DesignApricityComponent } from './designs/special-pages/design-apricity/design-apricity.component';
import { DesignDesignDecalsComponent } from './designs/special-pages/design-design-decals/design-design-decals.component';
import { DesignPrevailGamingComponent } from './designs/special-pages/design-prevail-gaming/design-prevail-gaming.component';
import { PixelsortingViewerComponent } from './designs/special-pages/design-pixel-sorting/pixelsorting-viewer/pixelsorting-viewer.component';

//Components
import { ImageLightboxComponent } from './global-component/image-lightbox/image-lightbox.component';

const appRoutes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'about', component: AboutComponent},
    { path: 'logos', component: LogosComponent, children: [
      {path: ':name', component: LogoComponent}
    ]},
    { path: 'web', component: WebComponent },
    { path: 'photography', component: PhotographyComponent },
    { path: 'contact', component: ContactComponent },

    //Special pages on /designs otehrwise fall back to children 
    {path: 'designs/pixel-sorting', component: DesignPixelSortingComponent, children: [
      { path: ':id', component: PixelsortingViewerComponent }
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