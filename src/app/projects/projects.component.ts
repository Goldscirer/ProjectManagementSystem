import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.dataStorage.getProjects();
    this.dataStorage.getProfile();
  }
}
