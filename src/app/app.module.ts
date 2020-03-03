import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router"
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { LogosComponent } from './logos/logos.component';
import { WebComponent } from './web/web.component';
import { PhotographyComponent } from './photography/photography.component';
import { GamesComponent } from './games/games.component';
import { ContactComponent } from './contact/contact.component';
import { ContentModuleComponent } from './content-module/content-module.component';
import { FooterComponent } from './footer/footer.component'
import { PhotoBundleComponent } from './photography/photo-bundle/photo-bundle.component';
import { LogoBundleComponent } from './logos/logo-bundle/logo-bundle.component';
import { GameBundleComponent } from './games/game-bundle/game-bundle.component';
import { DesignComponent } from './design/design.component';
import { BannerComponent } from './banner/banner.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

const appRoutes: Routes =[
{ path: '', component: AboutComponent },
{ path: 'about', component: AboutComponent},
{ path: 'logos', component: LogosComponent },
{ path: 'web', component: WebComponent },
{ path: 'photography', component: PhotographyComponent },
{ path: 'games', component: GamesComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'design', component: DesignComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    HeaderComponent,
    AboutComponent,
    LogosComponent,
    WebComponent,
    PhotographyComponent,
    GamesComponent,
    ContactComponent,
    ContentModuleComponent,
    FooterComponent,
    PhotoBundleComponent,
    LogoBundleComponent,
    GameBundleComponent,
    DesignComponent,
    BannerComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
