import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Project} from '../../../projects/project.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit, OnChanges {
  @Input() task: Project;
  @Input() index: number;
  @Input() projectId: number;

  zm: number;

  status = false;
  constructor() { }

  ngOnInit() {
  }

  ifStatus () {
    /*return this.status = true;*/
    this.zm = this.index;

    if(this.index === this.zm)
    {
      return true;
    }
    return false;
  }

  ngOnChanges() {
    this.status = false;
  }

}
