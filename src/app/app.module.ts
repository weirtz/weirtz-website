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
import { UtilitiesModule } from './global-components/utilities/utilities.module';
import { InfoModule } from './global-components/info/info.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserModule,
    // FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NavigationModule,
    UtilitiesModule,
    InfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
