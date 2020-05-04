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
import { DesignsComponent } from './designs/designs.component';
import { ContactComponent } from './contact/contact.component';
import { LogoComponent } from './logos/logo/logo.component';
import { FolderObjectComponent } from './objects/folder-object/folder-object.component';
import { DesignComponent } from './designs/design/design.component';
import { DesignPixelSortingComponent } from './designs/special-pages/design-pixel-sorting/design-pixel-sorting.component';
import { DesignApricityComponent } from './designs/special-pages/design-apricity/design-apricity.component';
import { DesignDesignDecalsComponent } from './designs/special-pages/design-design-decals/design-design-decals.component';
import { DesignPrevailGamingComponent } from './designs/special-pages/design-prevail-gaming/design-prevail-gaming.component';

//Services
import { GamesService } from './games/games.service';
import { LogosService } from './logos/logos.service';
import { ScrollingService } from './services/scrolling.service';
import { DesignsService } from './designs/designs.service';


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
    DesignsComponent,
    BannerComponent,
    ProgressBarComponent,
    PageNotFoundComponent,
    GameComponent,
    LogoComponent,
    FolderObjectComponent,
    DesignComponent,
    DesignPixelSortingComponent,
    DesignApricityComponent,
    DesignDesignDecalsComponent,
    DesignPrevailGamingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GamesService, LogosService, ScrollingService, DesignsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
