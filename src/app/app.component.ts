import { Component, Injectable, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NzConfigService } from 'ng-zorro-antd/core/config';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
  ],
})
export class AppComponent implements OnInit {
  color = '';
  constructor(private t: Title, private readonly nzConfigService: NzConfigService) {

  }
  currTitle = 'ng-app';

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
