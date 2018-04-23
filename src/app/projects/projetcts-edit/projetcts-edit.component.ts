import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Project} from '../project.model';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProjectService} from '../project.service';
import {DataStorageService} from '../../shared/data-storage.service';
import {Response} from '@angular/http';
import {ProfileService} from '../../auth/profile/profile.service';
import {Subscription} from 'rxjs/Subscription';
import {Profile} from '../../auth/profile/profile.model';

@Component({
  selector: 'app-projetcts-edit',
  templateUrl: './projetcts-edit.component.html',
  styleUrls: ['./projetcts-edit.component.css']
})

/**
 *
 * @whatItDoes
 * @howToUse
 * {@example
 * @description
 * Editing individual project components: Name, description and creating and editing tasks.
 * @stable
 */
export class ProjetctsEditComponent implements OnInit {
  id: number;
  editMode = false;
  profile: Profile[];
  projectForm: FormGroup;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private router: Router,
              private dataStorage: DataStorageService,
              private profileService: ProfileService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );


    this.subscription = this.profileService.profileChanged
      .subscribe(
        (profile: Profile[]) => {
          this.profile = profile;
        }
      );
    this.profile = this.profileService.getProfile();

  }

  onSubmit() {
    if (this.editMode) {
      this.projectService.updateProject(this.id, this.projectForm.value);
    } else {
      this.projectService.addProject(this.projectForm.value);
    }
    this.onCancel();
  }

  onAddTask() {
    (<FormArray>this.projectForm.get('task')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required),
        'state': new FormControl(null, Validators.required),
        'priority': new FormControl(null, Validators.required),
        'member': new FormControl(null),
        'type': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteTask(index: number) {
    (<FormArray>this.projectForm.get('task')).removeAt(index);
  }

  onCancel() {
    this.dataStorage.storeProjects()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let projectName = '';
    let projectDescription = '';
    let projectTask = new FormArray([]);

    if (this.editMode) {
      const project = this.projectService.getProject(this.id);
      projectName = project.name;
      projectDescription = project.description;
      if (project['task']) {
        for (let task of project.task) {
          projectTask.push(
            new FormGroup({
              'name': new FormControl(task.name, Validators.required),
              'description': new FormControl(task.description, Validators.required),
              'state': new FormControl(task.state, Validators.required),
              'priority': new FormControl(task.priority, Validators.required),
              'member': new FormControl(task.member, Validators.required),
              'type': new FormControl(task.type, Validators.required)
            })
          );
        }
      }
    }

    this.projectForm = new FormGroup({
      'name': new FormControl(projectName, Validators.required),
      'description': new FormControl(projectDescription, Validators.required),
      'task': projectTask
    });
  }

}
