import {Task} from '../shared/task.model';

export class Project {
  public name: string;
  public description: string;
  public task: Task[];

  constructor(name: string, description: string, task: Task[]) {
    this.name = name;
    this.description = description;
    this.task = task;

  }
}
