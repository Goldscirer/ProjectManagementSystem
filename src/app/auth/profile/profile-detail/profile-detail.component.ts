import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Profile} from '../profile.model';
import {DataStorageService} from '../../../shared/data-storage.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})

/**
 *
 * @whatItDoes
 * @howToUse
 * {@example
 * @description
 * Presentation of user data.
 * @stable
 */
export class ProfileDetailComponent implements OnInit, OnDestroy {

  @Input() profile: Profile;
  @Input() index: number;


  constructor(private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.dataStorage.storeProfiles()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  ngOnDestroy() {
    this.profile.name = '';
    this.profile.surname = '';
    this.profile.position = '';
  }

}
