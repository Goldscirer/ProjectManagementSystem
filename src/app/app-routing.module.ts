import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent} from  './dashboard/dashboard.component';
import { ProjectsComponent} from './projects/projects.component';
import {HeaderComponent} from './header/header.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';


const appRoutes: Routes = [
  {path : '', redirectTo: '/signin', pathMatch: 'full'},
  {path : 'dashboard', component: DashboardComponent},
  {path : 'projects', component: ProjectsComponent},
  {path : 'signup', component: SignupComponent},
  {path : 'signin', component: SigninComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
