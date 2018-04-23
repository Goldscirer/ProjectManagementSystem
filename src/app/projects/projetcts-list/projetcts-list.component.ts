import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Project} from '../project.model';
import {Subscription} from 'rxjs/Subscription';
import {ProjectService} from '../project.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-projetcts-list',
  templateUrl: './projetcts-list.component.html',
  styleUrls: ['./projetcts-list.component.css']
})

/**
 *
 * @whatItDoes
 * @howToUse
 * {@example
 * @description
 * Displaying the list of projects created by the user.
 * @stable
 */
export class ProjetctsListComponent implements OnInit, OnDestroy {
  project: Project[];
  subscription: Subscription;

  constructor(private projectService: ProjectService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.projectService.projectChanged
      .subscribe(
        (project: Project[]) => {
          this.project = project;
        }
      );
    this.project = this.projectService.getProjects();
  }

  onNewProject() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
