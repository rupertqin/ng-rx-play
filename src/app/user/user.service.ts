import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserModule } from './user.module'

@Injectable(
	{
		providedIn: 'root',
	}
)
export class UserService {
  constructor(private t: Title) {

  }
  currTitle = 'ng-app';

  changeTitle() {
    this.t.setTitle('lili')
  }
}