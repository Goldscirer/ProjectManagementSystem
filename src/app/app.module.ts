import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';
import { ProjetctsListComponent } from './projects/projetcts-list/projetcts-list.component';
import { ProjetctsItemComponent } from './projects/projetcts-list/projetcts-item/projetcts-item.component';
import { ProjetctsEditComponent } from './projects/projetcts-edit/projetcts-edit.component';
import {HttpModule} from '@angular/http';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectStartComponent } from './projects/project-start/project-start.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import {AuthGuard} from './auth/auth-guard.service';
import {ProjectService} from './projects/project.service';
import { TaskEditComponent } from './task/task-list/task-edit/task-edit.component';
import {TaskListService} from './task/task-list.service';
import {DataStorageService} from './shared/data-storage.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import {ProfileService} from './auth/profile/profile.service';
import { ProfileEditComponent } from './auth/profile/profile-edit/profile-edit.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {Profile} from './auth/profile/profile.model';
import { ProfileDetailComponent } from './auth/profile/profile-detail/profile-detail.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
import { TaskItemComponent } from './task/task-list/task-item/task-item.component';
import { TaskComponent } from './task/task.component';
import {Project} from './projects/project.model';
import {Task} from './shared/task.model';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectsComponent,
    HeaderComponent,
    DropdownDirective,
    SignupComponent,
    SigninComponent,
    ProjetctsListComponent,
    ProjetctsItemComponent,
    ProjetctsEditComponent,
    ProjectDetailComponent,
    ProjectStartComponent,
    TaskListComponent,
    TaskEditComponent,
    ProfileComponent,
    FieldErrorDisplayComponent,
    ProfileEditComponent,
    ProfileDetailComponent,
    TaskDetailComponent,
    TaskItemComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCzQ0l-oFJViz1sm-dsxR6-dRK202QVqyI',
      authDomain: 'project-menagement-system.firebaseapp.com',
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    FieldErrorDisplayComponent,
    ProjectsComponent,
    AuthService,
    AuthGuard,
    ProjectService,
    ProfileService ,
    TaskListService,
    DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
