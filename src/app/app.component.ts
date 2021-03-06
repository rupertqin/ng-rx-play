import { Component, Injectable, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NzConfigService } from 'ng-zorro-antd/core/config';

import { UserService } from './user/user.service'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    UserService
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  color = '';
  constructor(private t: Title, private userService: UserService, private readonly nzConfigService: NzConfigService) {

  }
  currTitle = 'ng-app';

  changeTitle() {
    this.userService.changeTitle()
  }

  ngOnInit(): void {
    this.nzConfigService.set('codeEditor', {
      assetsRoot: '/assets/monaco-editor/min/',
      defaultEditorOption: {
        fontSize: 24
      },
      onLoad() {
        console.log('code editor onLoad')
      },
      onInit() {
        console.log('code editor onInit', (window as any).monaco)

      }
    })
  }

}
