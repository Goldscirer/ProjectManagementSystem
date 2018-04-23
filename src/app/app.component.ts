import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'project';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCzQ0l-oFJViz1sm-dsxR6-dRK202QVqyI',
      authDomain: 'project-menagement-system.firebaseapp.com',
    });

  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
