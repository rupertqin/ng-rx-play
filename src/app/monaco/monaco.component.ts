import { Component, OnInit } from '@angular/core';
import { EXAMPLE_CODE } from 'src/app/constant'

@Component({
  selector: 'app-monaco',
  templateUrl: './monaco.component.html',
  styleUrls: ['./monaco.component.scss']
})
export class MonacoComponent implements OnInit {

  constructor() { }
  editorOptions = {
    theme: 'vs-dark', 
    language: 'javascript'
  };
  code: string = EXAMPLE_CODE;

  ngOnInit(): void {
  }

}
