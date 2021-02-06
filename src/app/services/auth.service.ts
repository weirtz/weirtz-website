import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import firebase from 'firebase/app'

@Injectable({ providedIn: 'root' })
export class AuthService {
    user$: Observable<User>;


    
    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) {
        this.user$ = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.afs.doc<User>('users/${user.uid}').valueChanges();
                } else{
                    return of(null);
                }
            })
        )
     }

    async googleSignin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const credential = await this.afAuth.signInWithPopup(provider);
        console.log("Signed in.");
        console.log(this.user$);
        return this.updateUserData(credential.user);
    }
      
    async signOut() {
        await this.afAuth.signOut();
        this.router.navigate(['/']);
    }

    private updateUserData({uid, email, displayName, photoURL }: User) {
        // Sets user data to firestore on login
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

        const data = { 
            uid, 
            email, 
            displayName, 
            photoURL
    } 
    console.log(uid,email,displayName,photoURL);
    return userRef.set(data, { merge: true })

    }
}

