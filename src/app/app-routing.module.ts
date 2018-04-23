import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent} from  './dashboard/dashboard.component';
import { ProjectsComponent} from './projects/projects.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {ProjectDetailComponent} from './projects/project-detail/project-detail.component';
import {ProjetctsEditComponent} from './projects/projetcts-edit/projetcts-edit.component';
import {ProjectStartComponent} from './projects/project-start/project-start.component';
import {AuthGuard} from './auth/auth-guard.service';
import {TaskListComponent} from './task/task-list/task-list.component';
import {ProfileComponent} from './auth/profile/profile.component';
import {TaskDetailComponent} from './task/task-detail/task-detail.component';


const appRoutes: Routes = [
  {path : '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path : 'dashboard', component: DashboardComponent},
  {path : 'projects', component: ProjectsComponent, children: [
      { path: '', component: ProjectStartComponent },
      { path: 'new', component: ProjetctsEditComponent },
      { path: ':id', component: ProjectDetailComponent},
      { path: ':id/edit', component: ProjetctsEditComponent},
    ]},
  {path: 'task-list', component: TaskListComponent, children: [
      { path: '', component: TaskDetailComponent },
      { path: ':id/:projectId', component: TaskDetailComponent },
    ]},
  {path : 'signup', component: SignupComponent},
  {path : 'signin', component: SigninComponent},
  {path : 'profile', component: ProfileComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
