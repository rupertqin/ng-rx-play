import { Component, OnInit } from '@angular/core';
import { EXAMPLE_CODE_HTML } from './constant'
import { EXAMPLE_CODE } from 'src/app/constant'
const langs = ['html', 'javascript'];
@Component({
  selector: 'app-monaco',
  templateUrl: './monaco.component.html',
  styleUrls: ['./monaco.component.scss']
})
export class MonacoComponent implements OnInit {
  editorOptions = {
    theme: 'vs-dark', 
    language: 'javascript'
  }
  lang = langs[1];
  langs = langs
  code: string = EXAMPLE_CODE

  onLangChange(val: string) {
     this.editorOptions.language = val;
  }

  ngOnInit(): void {
  }
}
