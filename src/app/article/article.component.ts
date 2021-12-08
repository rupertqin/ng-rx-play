import { Component, AfterViewInit, HostListener, Pipe, PipeTransform, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
import { UserService } from '../user/user.service';
import { fromTextArea, showHint } from 'codemirror';
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/hint/show-hint.js'

const pdfPath = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: [
    './article.component.scss',
    '../../../node_modules/codemirror/lib/codemirror.css',
    '../../../node_modules/codemirror/addon/hint/show-hint.css',
  ],
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

  src = pdfPath;
  ngOnInit() {
    console.log(this.myTextarea);
  }

  ngAfterViewInit(): void {
    if (this.myTextarea) {
      var editor = fromTextArea(this.myTextarea.nativeElement, {
        lineNumbers: true,
        mode: 'javascript',
        onKeyEvent: function (e, s) {
          if (s.type == "keyup") {
            showHint(e);
          }
          return false
        }
      });
      editor.setValue("var a = 'hello world';")
    }
  }
  say(str: string) {
    console.log(str || 'one')
  }

  changeTitle() {
    this.userService.changeTitle()
  }
}

@Pipe({
  name: 'cat',
  pure: true
})
export class CatPipe implements PipeTransform {
  constructor(private appComponent: ArticleComponent) {}

  transform(id: number, property: 'name' | 'userId'): any {
    console.log('🤪User', id);
    const cat = this.appComponent.cats.find(c => c.userId === id);
    if (cat) {
      return cat[property];
    }
  }
}
