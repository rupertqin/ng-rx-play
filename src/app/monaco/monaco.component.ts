import { Component, OnInit } from '@angular/core';
// import { editor } from 'monaco-editor';
import { EXAMPLE_CODE_HTML } from './constant'
import { MonacoEditorModule, EditorComponent } from 'ngx-monaco-editor'
import { EXAMPLE_CODE } from 'src/app/constant'
const langs = ['html', 'javascript'];
const themes = ['vs-dark', 'vs-light'];

const codeMap = {
  [langs[0]]: EXAMPLE_CODE_HTML,
  [langs[1]]: EXAMPLE_CODE,
}
@Component({
  selector: 'app-monaco',
  templateUrl: './monaco.component.html',
  styleUrls: ['./monaco.component.scss']
})
export class MonacoComponent implements OnInit {
  editorOptions = {
    theme: themes[0], 
    language: langs[1]
  }
  langs = langs
  themes = themes
  code = EXAMPLE_CODE
  editor: any = null

  onMonacoInit(editor: any) {
    console.log(editor)
    this.editor = editor;
  }

  get lang() {
    return this.editorOptions.language;
  }
  set lang(val: string) {
    this.editorOptions.language = val;
    this.editor?.updateOptions(this.editorOptions)
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
    this.lang = langs[0]
  }
}
