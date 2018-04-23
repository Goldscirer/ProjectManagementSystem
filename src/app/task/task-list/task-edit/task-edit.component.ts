import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild, Input
} from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Task} from '../../../shared/task.model';
import {TaskListService} from '../../task-list.service';
import {Profile} from '../../../auth/profile/profile.model';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Task;

  constructor(private taskService: TaskListService) { }

  ngOnInit() {
    this.subscription = this.taskService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.taskService.getTask(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            description: this.editedItem.description,
            member: this.editedItem.member,
            priority: this.editedItem.priority,
            state: this.editedItem.state,
            type: this.editedItem.type
          });
        }
      );
  }



  onSubmit(form: NgForm) {
    const value = form.value;
    const newTask = new Task(value.name, value.description, value.member, value.prioryty, value.state, value.type );
    if (this.editMode) {
      this.taskService.updateTask(this.editedItemIndex, newTask);
    } else {
      this.taskService.addTask(newTask);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.taskService.deleteTask(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
