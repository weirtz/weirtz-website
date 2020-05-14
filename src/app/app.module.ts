//Angular
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Pages
import { AppComponent } from './app.component';

//Global Modules
import { NavigationModule } from './global-components/navigation/navigation.module';
import { InfoModule } from './global-components/info/info.module';
import { CommonModule } from '@angular/common';
import { NavComponent } from './global-components/navigation/nav/nav.component';

import {MatProgressBarModule} from '@angular/material/progress-bar'



@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    // BrowserModule,
    // FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NavigationModule,
    MatProgressBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
