import {Component, OnInit} from '@angular/core';
import {Project} from '../project.model';
import {ProjectService} from '../project.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataStorageService} from '../../shared/data-storage.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

/**
 *
 * @whatItDoes
 * @howToUse
 * {@example
 * @description
 * Display detailed information about the project.
 * @stable
 */
export class ProjectDetailComponent implements OnInit {
  project: Project;
  id: number;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router,
              private dataStorage: DataStorageService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.project = this.projectService.getProject(this.id);
        }
      );
  }

  onAddToTaskList() {
    this.projectService.addTaskToTaskList(this.project.task);
  }

  onEditProject() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteProject() {
    this.projectService.deleteProject(this.id);
    this.router.navigate(['/projects']);
    this.dataStorage.storeProjects()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

}
