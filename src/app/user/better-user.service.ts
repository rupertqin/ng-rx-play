import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InfoService } from './info.service'
import {BaseUserService} from './base-user.service'

@Injectable()
export class BetterUserService extends BaseUserService {
  constructor(private tt: Title, private infoService: InfoService) {
    super();
  }
  override count = 100000;
  currTitle = 'ng-app';

  override changeTitle(title = 'Gantz') {
    this.tt.setTitle(title)
    const name = this.infoService.name;
    console.log(`better ${name} count: `, ++this.count)
  }
}
