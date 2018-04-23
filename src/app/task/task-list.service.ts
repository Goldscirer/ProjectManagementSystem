import {Subject} from 'rxjs/Subject';
import {Task} from '../shared/task.model';

export class TaskListService {
  taskChanged = new Subject<Task[]>();
  startedEditing = new Subject<number>();
  private task: Task[] = [];

  getTasks() {
    return this.task.slice();
  }

  getTask(index: number) {
    return this.task[index];
  }

  addTask(task: Task) {
    this.task.push(task);
    this.taskChanged.next(this.task.slice());
  }

  updateTask(index: number, newTask: Task) {
    this.task[index] = newTask;
    this.taskChanged.next(this.task.slice());
  }

  deleteTask(index: number) {
    this.task.splice(index, 1);
    this.taskChanged.next(this.task.slice());
  }
}
