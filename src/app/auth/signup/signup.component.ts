import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

/**
 *
 * @whatItDoes
 * @howToUse
 * {@example
 * @description
 * Responsible for registering a user on the site.
 * @stable
 */
export class SignupComponent implements OnInit {

  completed = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    this.completed = false;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }


}
