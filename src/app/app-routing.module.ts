//Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { AccountComponent } from './pages/auth/pages/account/account.component';
import { ForgotPasswordComponent } from './pages/auth/pages/forgot-password/forgot-password.component';
import { SignInComponent } from './pages/auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth/pages/sign-up/sign-up.component';
import { VerifyEmailComponent } from './pages/auth/pages/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';

const appRoutes: Routes = [
    { path: '', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)},
    { path: 'designs', loadChildren: () => import('./pages/designs/designs.module').then(m => m.DesignsModule)},
    { path: 'web', loadChildren: () => import('./pages/web/web.module').then(m => m.WebModule)},
    { path: 'photography', loadChildren: () => import('./pages/photography/photography.module').then(m => m.PhotographyModule)},
    { path: 'games', loadChildren: () => import('./pages/games/games.module').then(m => m.GamesModule)},
    { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)},
    { path: 'mark', loadChildren: () => import('./pages/misc/mark/mark/mark.module').then(m => m.MarkModule)},
    { path: 'sign-in', loadChildren: () => import('./pages/auth/pages/sign-in/sign-in.module').then(m => m.SignInModule)},
    { path: 'sign-up', loadChildren: () => import('./pages/auth/pages/sign-up/sign-up.module').then(m => m.SignUpModule)},
    { path: 'forgot-password', loadChildren: () => import('./pages/auth/pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)},
    { path: 'verify-email', loadChildren: () => import('./pages/auth/pages/verify-email/verify-email.module').then(m => m.VerifyEmailModule)},
    { path: 'account', loadChildren: () => import('./pages/auth/pages/account/account.module').then(m => m.AccountModule)},
    { path: '**', loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)},
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}