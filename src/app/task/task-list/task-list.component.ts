import {Component, OnInit} from '@angular/core';
import {Task} from '../../shared/task.model';
import {Subscription} from 'rxjs/Subscription';
import {TaskListService} from '../task-list.service';
import {Project} from '../../projects/project.model';
import {ProjectService} from '../../projects/project.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

/**
 * @whatItDoes
 * @howToUse
 * {@example
 * @description
 * Displaying the list of tasks assigned to specific projects.
 * @stable
 */
export class TaskListComponent implements OnInit {
  task: Task[];
  project: Project[];
  prj: Project;
  private subscription: Subscription;
  projectSelected: number;
  id: number;
  index: number;

  constructor(private taskService: TaskListService,
              private projectService: ProjectService) {
  }

  ngOnInit() {
    this.subscription = this.projectService.projectChanged
      .subscribe(
        (project: Project[]) => {
          this.project = project;
        }
      );
    this.project = this.projectService.getProjects();
    this.task = this.taskService.getTasks();
    this.subscription = this.taskService.taskChanged
      .subscribe(
        (task: Task[]) => {
          this.task = task;
        }
      );
    this.projectSelected = 0;
  }

  slectChangeHandler(event: any) {
    this.projectSelected = event.target.value;
  }

  onEditItem(index: number) {
    this.taskService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showTask() {
    this.id = this.projectSelected;
    this.prj = this.projectService.getProject(this.id);

    return true;
  }

}
