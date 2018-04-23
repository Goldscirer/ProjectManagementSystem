import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from './profile.service';
import {DataStorageService} from '../../shared/data-storage.service';
import {Response} from '@angular/http';
import {Subscription} from 'rxjs/Subscription';
import {Profile} from './profile.model';
import {empty} from 'rxjs/Observer';
import {isEmpty} from 'rxjs/operator/isEmpty';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

/**
 *
 * @whatItDoes
 * @howToUse
 * {@example
 * @description
 * Contains all the elements responsible for presenting user data.
 * @stable
 */
export class ProfileComponent implements OnInit, OnDestroy {

  profile: Profile[];
  subscription: Subscription;
  form: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private profileService: ProfileService,
              private dataStorageService: DataStorageService) {

  }

  ngOnInit() {
    this.dataStorageService.getProfile();

    this.subscription = this.profileService.profileChanged
      .subscribe(
        (profile: Profile[]) => {
          this.profile = profile;
          console.log(profile);
        }
      );
    this.profile = this.profileService.getProfile();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.profile = null;
  }


}
