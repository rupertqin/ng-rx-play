import { Component, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { UserService } from './user/user.module'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  color = '';
  constructor(private t: Title, private userService: UserService) {

  }
  currTitle = 'ng-app';

  changeTitle() {
    this.userService.changeTitle()
  }

}
