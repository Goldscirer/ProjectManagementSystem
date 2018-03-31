import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCzQ0l-oFJViz1sm-dsxR6-dRK202QVqyI',
      authDomain: 'project-menagement-system.firebaseapp.com',
    });
  }

}
