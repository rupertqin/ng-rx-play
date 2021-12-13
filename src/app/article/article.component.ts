import { Component, AfterViewInit, HostListener, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../user/user.service';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/javascript-hint.js'
import { EXAMPLE_CODE } from 'src/app/constant'


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: [
    './article.component.scss',
    '../../../node_modules/codemirror/lib/codemirror.css',
    '../../../node_modules/codemirror/addon/hint/show-hint.css',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    UserService
  ]
})
export class ArticleComponent implements AfterViewInit {
  constructor(private userService: UserService) {
    this.myTextarea = null;
  }
  @ViewChild('myTextarea') myTextarea: ElementRef<HTMLTextAreaElement>|null;
  users = [{ id: 1, name: 'wang' }, { id: 2, name: 'li' }];
  cats = [{ name: 'Tom', userId: 1 }, { name: 'Jerry', userId: 2 }];

  @HostListener('click')
  clicked() { }

  getCat = (userId: number) => {
    console.log('🤪User', userId);
    console.log('this: ', this);
    return this.cats.find(c => c.userId === userId)?.name;
  }

  ngOnInit() {
    console.log(this.myTextarea);
  }

  ngAfterViewInit(): void {
    if (this.myTextarea) {
      var editor = CodeMirror.fromTextArea(this.myTextarea.nativeElement, {
        lineNumbers: true,
        mode: 'javascript',
      });
      editor.setValue(EXAMPLE_CODE)
    }
  }

  say(str: string) {
    console.log(str || 'one')
  }

  changeTitle() {
    this.userService.changeTitle()
  }
}
