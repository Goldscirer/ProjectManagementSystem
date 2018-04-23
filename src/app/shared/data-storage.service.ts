import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ProjectService} from '../projects/project.service';
import {AuthService} from '../auth/auth.service';
import {Project} from '../projects/project.model';
import 'rxjs/Rx';
import {ProfileService} from '../auth/profile/profile.service';
import {AngularFireDatabase, AngularFireDatabaseModule, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {AngularFireAuth} from 'angularfire2/auth';
import {Profile} from '../auth/profile/profile.model';

@Injectable()

/**
 *
 * @whatItDoes
 * @howToUse
 * {@example
 * @description
 * Responsible for sending, downloading and editing data to communicate with firebase.
 * @stable
 */
export class DataStorageService {

  userId: string;

  constructor(private  http: Http,
              private projectService: ProjectService,
              private profileService: ProfileService,
              private  authService: AuthService,
              private db: AngularFireDatabaseModule,
              private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
    });
  }

  /**
   * @whatItDoes
   * @howToUse
   * {@example
   * @description
   * Saves the created projects in the database.
   * @stable
   */
  storeProjects() {
    const token = this.authService.getToken();

    return this.http.put('https://project-menagement-system.firebaseio.com/project.json?auth' + token, this.projectService.getProjects());
  }

  /**
   * @whatItDoes
   * @howToUse
   * {@example
   * @description
   * Saves the created user profiles in the database.
   * @stable
   */
  storeProfile() {
    const token = this.authService.getToken();
    return this.http.put(`https://project-menagement-system.firebaseio.com/profile/${this.userId}/profil.json?auth` + token,
      this.profileService.getProfile());
  }

  /**
   * @whatItDoes
   * @howToUse
   * {@example
   * @description
   * Save the list of users for future management and assigning to individual tasks.
   * @stable
   */
  storeProfiles() {
    const token = this.authService.getToken();
    return this.http.put(`https://project-menagement-system.firebaseio.com/profils.json?auth` + token,
      this.profileService.getProfile());
  }

  /**
   * @whatItDoes
   * @howToUse
   * {@example
   * @description
   * Downloading user profile data.
   * @stable
   */
  getProfile() {
    const token = this.authService.getToken();

    this.http.get(`https://project-menagement-system.firebaseio.com/profile/${this.userId}/profil.json?auth` + token)
      .map(
        (response: Response) => {
          const profiles: Profile[] = response.json();
          for (let profile of profiles) {
            if (!profile['profil']) {
              profile['profil'] = [];
            }
          }
          return profiles;
        }
      )
      .subscribe(
        (profiles: Profile[]) => {
          this.profileService.setProfile(profiles);
          console.log(profiles);
        }
      );
  }

  /**
   * @whatItDoes
   * @howToUse
   * {@example
   * @description
   * Downloading projects from the database.
   * @stable
   */
  getProjects() {
    const token = this.authService.getToken();

    this.http.get('https://project-menagement-system.firebaseio.com/project.json?auth=' + token)
      .map(
        (response: Response) => {
          const projects: Project[] = response.json();
          for (let project of projects) {
            if (!project['task']) {
              project['task'] = [];
            }
          }
          return projects;
        }
      )
      .subscribe(
        (projects: Project[]) => {
          this.projectService.setProjects(projects);
        }
      );
  }
}
