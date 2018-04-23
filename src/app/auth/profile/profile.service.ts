import {Subject} from 'rxjs/Subject';
import {Profile} from './profile.model';

/**
 *
 * @whatItDoes
 * @howToUse
 * {@example
 * @description
 * Allows setting user data, downloading user data, adding user data.
 * @stable
 */
export class ProfileService {
  profileChanged = new Subject<Profile[]>();

  private profile: Profile[] = [];

  constructor() {
  }

  setProfile(profile: Profile[]) {
    this.profile = profile;
    this.profileChanged.next(this.profile.slice());
  }

  getProfile() {
    return this.profile.slice();
  }

  addProfile(profile: Profile) {
    this.profile[0] = profile;
    this.profileChanged.next(this.profile.slice());
  }
}
