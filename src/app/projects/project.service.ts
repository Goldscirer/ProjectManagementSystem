import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Project} from './project.model';
import {Task} from '../shared/task.model';
import {TaskListService} from '../task/task-list.service';

@Injectable()
export class ProjectService {
  projectChanged = new Subject<Project[]>();

  private project: Project[] = [];

  constructor(/*private taskList: TaskListService*/) {}

  setProjects(projects: Project[]) {
    this.project = projects;
    this.projectChanged.next(this.project.slice());
  }

  getProjects() {
    return this.project.slice();
  }

  getProject(index: number) {
    return this.project[index];
  }

  getProjectTask(index: number) {
    return this.project[index].task;
  }

  addTaskToTaskList(task: Task[]) {
    /*this.taskList.addTasks(task);*/
  }

  addProject(project: Project) {
    this.project.push(project);
    this.projectChanged.next(this.project.slice());
  }

  updateProject(index: number, newProject: Project) {
    this.project[index] = newProject;
    this.projectChanged.next(this.project.slice());
  }

  deleteProject(index: number) {
    this.project.splice(index, 1);
    this.projectChanged.next(this.project.slice());
  }
}
