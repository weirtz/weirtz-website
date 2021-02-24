//Angular
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Pages
import { AppComponent } from './app.component';

//Global Modules
import { NavigationModule } from './global-components/navigation/navigation.module';
import { NavComponent } from './global-components/navigation/nav/nav.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,

    NavigationModule,
    MatProgressBarModule,
    HammerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
