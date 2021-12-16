import { Component, OnInit } from '@angular/core';
import { EXAMPLE_CODE_HTML, EXAMPLE_CODE_TYPESCRIPT } from './constant'
import { EXAMPLE_CODE } from 'src/app/constant'
const themes = ['vs-dark', 'vs-light'];

enum Langs {
  Html = 'html',
  Javascript = 'javascript',
  Typescript = 'typescript',
}

const codeMap = {
  [Langs.Html]: EXAMPLE_CODE_HTML,
  [Langs.Javascript]: EXAMPLE_CODE,
  [Langs.Typescript]: EXAMPLE_CODE_TYPESCRIPT,
}
@Component({
  selector: 'app-monaco-action',
  template: `
    <div class="select-lang">
    lang: 
    <select [(ngModel)]="lang">
      <option *ngFor="let opt of langs" [value]="opt">{{ opt }}</option>
    </select>
    theme: 
    <select [(ngModel)]="theme">
      <option *ngFor="let opt of themes" [value]="opt">{{ opt }}</option>
    </select>
  </div>
  <ngx-monaco-editor
    *ngIf="!loading"
    class="editor" 
    [options]="editorOptions"
    (onInit)="onMonacoInit($event)"
    [(ngModel)]="code"></ngx-monaco-editor>
  `,
  styles: [`
    .select-lang {
      margin-bottom: 1em;
    }
    .editors {
      display: flex;
      > div {
        flex: 1;
      }
    }
    .editor {
    	height: 100vh;
    }
  `]
})
export class MonacoActionComponent implements OnInit {
  editorOptions = {
    theme: themes[0], 
    language: Langs.Javascript
  }
  langs = Object.values(Langs) .filter((value) => typeof value === "string") .map((value) => value);
  themes = themes
  code = EXAMPLE_CODE
  editor: any = null
  loading = false;

  onMonacoInit(editor: any) {
    console.log(editor)
    this.editor = editor;
  }

  reload() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 0);
  }

  get lang() {
    return this.editorOptions.language;
  }
  set lang(val: Langs) {
    this.editorOptions.language = val;
    this.editor?.updateOptions(this.editorOptions)
    this.reload()
    this.code = codeMap[val]
  }

  get theme() {
    return this.editorOptions.theme;
  }
  set theme(val: string) {
    this.editorOptions.theme = val;
    this.editor?.updateOptions(this.editorOptions)
  }

  ngOnInit(): void {
    this.lang = Langs.Javascript
  }
}
