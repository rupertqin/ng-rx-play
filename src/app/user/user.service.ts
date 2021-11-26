import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserModule } from './user.module'
import { MissionModule } from '../mission/mission.module'

@Injectable({
	providedIn: 'root',
})
export class UserService {
  constructor(private t: Title) {

  }
  count = 0;
  currTitle = 'ng-app';

  changeTitle() {
    this.t.setTitle('lili')
    console.log('count: ', ++this.count)
  }
}