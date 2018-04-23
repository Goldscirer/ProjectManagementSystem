import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Response} from '@angular/http';
import {ProfileService} from '../profile.service';
import {DataStorageService} from '../../../shared/data-storage.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
/**
 *
 * @whatItDoes
 * @howToUse
 * {@example
 * @description
 * Responsible for editing user's data.
 * @stable
 */
export class ProfileEditComponent implements OnInit {

  form: FormGroup;
  private formSumitAttempt: boolean;

  constructor(private formBuilder: FormBuilder,
              private profileService: ProfileService,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.required]],
      surname: [null, [Validators.required, Validators.required]],
      position: [null, [Validators.required, Validators.required]],
    });
  }

  isFieldValid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSumitAttempt)
    );
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSubmit() {
    this.profileService.addProfile(this.form.value);
    this.dataStorageService.storeProfile()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    this.profileService.addProfile(this.form.value);
    this.dataStorageService.storeProfiles()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }
}
