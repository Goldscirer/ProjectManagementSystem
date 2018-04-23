import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {log} from 'util';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {
  }

  signupUser(email: string, password: string) {
    let errorVar = false;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/signin']);
          errorVar = true;
        }
      )
      .catch(function (e) {
          console.log(e);
        }
      );
    return errorVar;
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            );

        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }


  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
