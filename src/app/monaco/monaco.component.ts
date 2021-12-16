import { Component, OnInit } from '@angular/core';
// import { editor } from 'monaco-editor';
import { EXAMPLE_CODE_HTML, EXAMPLE_CODE_TYPESCRIPT } from './constant'
import { MonacoEditorModule, EditorComponent } from 'ngx-monaco-editor'
import { EXAMPLE_CODE } from 'src/app/constant'
const langs = ['html', 'javascript', 'typescript'];
const themes = ['vs-dark', 'vs-light'];

const codeMap = {
  [langs[0]]: EXAMPLE_CODE_HTML,
  [langs[1]]: EXAMPLE_CODE,
  [langs[2]]: EXAMPLE_CODE_TYPESCRIPT,
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
  set lang(val: string) {
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
    this.lang = langs[0]
  }
}
