import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class InfoService {
  constructor(private t: Title) {

  }
  count = 0;
  currTitle = 'ng-app';
  name = 'Hasikii';

  changeTitle(title = 'Gantz') {
    this.t.setTitle(title)
    console.log('count: ', ++this.count)
  }
}
