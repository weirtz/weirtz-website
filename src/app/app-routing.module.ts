//Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)},
    { path: 'logos', loadChildren: () => import('./pages/logos/logos.module').then(m => m.LogosModule)},
    { path: 'designs', loadChildren: () => import('./pages/designs/designs.module').then(m => m.DesignsModule)},
    { path: 'web', loadChildren: () => import('./pages/web/web.module').then(m => m.WebModule)},
    { path: 'photography', loadChildren: () => import('./pages/photography/photography.module').then(m => m.PhotographyModule)},
    { path: 'games', loadChildren: () => import('./pages/games/games.module').then(m => m.GamesModule)},
    { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)},
    { path: '**', loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)},

    //{ path:'games', component: GamesComponent, children: [
     // {path:':game', component: GameComponent}
    //]},
    //keep ** as last route. Redirect not neccessary if you want to preserve link.
    //{path: 'not-found', component: PageNotFoundComponent},
    //{path: '**', redirectTo: '/not-found'}
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}