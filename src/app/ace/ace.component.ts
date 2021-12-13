import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import * as Ace from 'ace-builds';
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties"
import "ace-builds/src-noconflict/mode-typescript"
import { EXAMPLE_CODE } from 'src/app/constant'

@Component({
  selector: 'app-ace',
  templateUrl: './ace.component.html',
  styleUrls: [ './ace.component.scss' ]
})
export class AceComponent implements AfterViewInit {
  @ViewChild('myAce') myAce: ElementRef|null = null;

  ngAfterViewInit(): void {
    if (this.myAce) {
      const editor = Ace.edit(this.myAce.nativeElement, {
        theme: "ace/theme/tomorrow_night_eighties",
        mode: "ace/mode/typescript",
        maxLines: 45,
        wrap: true,
        autoScrollEditorIntoView: true
      });
      editor.session.setValue(EXAMPLE_CODE)
    }
  }

}
