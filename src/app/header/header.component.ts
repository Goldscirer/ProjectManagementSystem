import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
import {DataStorageService} from '../shared/data-storage.service';
import {delay} from 'q';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

/**
 *
 * @whatItDoes
 * @howToUse
 * {@example
 * @description
 * The page navigation bar.
 * @stable
 */
export class HeaderComponent {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  toProfile() {
    this.router.navigate(['./profile']);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['./signin']);

  }

}

