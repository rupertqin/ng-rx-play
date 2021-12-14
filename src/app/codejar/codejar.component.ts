import { Component, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { EXAMPLE_CODE } from 'src/app/constant'
import { CodeJar } from 'codejar';
import * as Prism from 'prismjs';
import { withLineNumbers } from 'codejar/linenumbers.js';
@Component({
  selector: 'app-codejar',
  templateUrl: './codejar.component.html',
  styleUrls: ['./codejar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CodejarComponent implements AfterViewInit {
  code: string = EXAMPLE_CODE;
  @ViewChild('editor') editor:ElementRef|null = null
  ngAfterViewInit(): void {
    if (this.editor) {
      const jar = CodeJar(
        this.editor.nativeElement,
        withLineNumbers(Prism.highlightElement),
      );
    }
  }
}
