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
import { DesignComponent } from './design/design.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'about', component: AboutComponent},
    { path: 'logos', component: LogosComponent },
    { path: 'web', component: WebComponent },
    { path: 'photography', component: PhotographyComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'design', component: DesignComponent },
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