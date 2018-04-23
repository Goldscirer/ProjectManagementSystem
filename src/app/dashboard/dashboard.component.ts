import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

/**
 *
 * @whatItDoes
 * @howToUse
 * {@example
 * @description
 * Displaying the main page.
 * @stable
 */
export class DashboardComponent implements OnInit {

  firstLogin: boolean;

  constructor(private  dataStorage: DataStorageService) {}

  ngOnInit() {
    this.dataStorage.getProjects();
    this.dataStorage.getProfile();
  }

}
