import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppModule } from './app.module'

@Injectable({
  providedIn: AppModule
})
export class Play {
  constructor(private t: Title) {

  }
  currTitle = 'ng-app';

  changeTitle() {
    this.t.setTitle('lili')
  }
}
