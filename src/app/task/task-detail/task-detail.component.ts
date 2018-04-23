import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Project} from '../../projects/project.model';
import {ProjectService} from '../../projects/project.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Task} from '../../shared/task.model';
import {TaskListService} from '../task-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit{

  project: Project;
  task: Task[];
  tsk: Task;
  id: number;
  subscription: Subscription;
  name: string;
  projectId: number;
  show = false;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private taskService: TaskListService) { }

  ngOnInit() {
    this.task = this.projectService.getProjectTask(0);
  }

  do() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.projectId = params['projectId'];
        }
      );
    this.task = this.projectService.getProjectTask(this.projectId);

    return true;
  }
}
