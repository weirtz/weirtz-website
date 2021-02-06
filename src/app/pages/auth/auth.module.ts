import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

//Auth
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';

const config = {

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyD93O-c715fuc6vF1YhnEzWW5CW-t5PqT8",
  authDomain: "weirtz-website.firebaseapp.com",
  databaseURL: "https://weirtz-website.firebaseio.com",
  projectId: "weirtz-website",
  storageBucket: "weirtz-website.appspot.com",
  messagingSenderId: "940287157503",
  appId: "1:940287157503:web:24575e177354e60d2d58ca",
  measurementId: "G-S47LB24B2M"


}

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,

    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    
    ],
  declarations: [
      AuthComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }