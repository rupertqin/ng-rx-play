import { Component, OnInit } from '@angular/core';
import { EXAMPLE_CODE_HTML } from './constant'
import { EXAMPLE_CODE } from 'src/app/constant'
const langs = ['html', 'javascript'];

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
    theme: 'vs-dark', 
    language: langs[1]
  }
  langs = langs
  code = EXAMPLE_CODE

  get lang() {
    return this.editorOptions.language;
  }
  set lang(val: string) {
    this.editorOptions.language = val;
    this.code = codeMap[val]
  }

  ngOnInit(): void {
  }
}
