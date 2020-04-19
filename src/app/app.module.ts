//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Global
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component'
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BannerComponent } from './banner/banner.component';

//Pages
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LogosComponent } from './logos/logos.component';
import { WebComponent } from './web/web.component';
import { PhotographyComponent } from './photography/photography.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game/game.component';
import { DesignComponent } from './design/design.component';
import { ContactComponent } from './contact/contact.component';
import { GamesService } from './games/games.service';
import { LogoComponent } from './logos/logo/logo.component';
import { FolderObjectComponent } from './objects/folder-object/folder-object.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    LogosComponent,
    WebComponent,
    PhotographyComponent,
    GamesComponent,
    ContactComponent,
    FooterComponent,
    DesignComponent,
    BannerComponent,
    ProgressBarComponent,
    PageNotFoundComponent,
    GameComponent,
    LogoComponent,
    FolderObjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
