import { Component, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { fromTextArea, showHint, commands } from 'codemirror';
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/hint/show-hint.js'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './user.component.scss',
    '../../../node_modules/codemirror/lib/codemirror.css',
    '../../../node_modules/codemirror/addon/hint/show-hint.css',
  ]
})
export class UserComponent implements AfterViewInit {
  @ViewChild('myTextarea') myTextarea: ElementRef<HTMLTextAreaElement>|null;

  constructor(private renderer: Renderer2) {
    this.myTextarea = null;
  }
  ngOnInit() {
    console.log(this.myTextarea);
  }

  ngAfterViewInit(): void {
    if (this.myTextarea) {
      var editor = fromTextArea(this.myTextarea.nativeElement, {
        lineNumbers: true,
        mode: 'javascript',
      });
      editor.setValue("var a = 'hello world';")
      editor.on("keyup", function (cm, event) {
        if (!cm.state.completionActive && event.keyCode !== 13) {
          commands.autocomplete(cm, () => null, {completeSingle: false});
        }
    });
    }
  }

}
