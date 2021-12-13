import { Component, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/javascript-hint.js'
import { EXAMPLE_CODE } from 'src/app/constant'

var ExcludedIntelliSenseTriggerKeys: Record<string, string> = {
  "8": "backspace",
  "9": "tab",
  "13": "enter",
  "16": "shift",
  "17": "ctrl",
  "18": "alt",
  "19": "pause",
  "20": "capslock",
  "27": "escape",
  "33": "pageup",
  "34": "pagedown",
  "35": "end",
  "36": "home",
  "37": "left",
  "38": "up",
  "39": "right",
  "40": "down",
  "45": "insert",
  "46": "delete",
  "91": "left window key",
  "92": "right window key",
  "93": "select",
  "107": "add",
  "109": "subtract",
  "110": "decimal point",
  "111": "divide",
  "112": "f1",
  "113": "f2",
  "114": "f3",
  "115": "f4",
  "116": "f5",
  "117": "f6",
  "118": "f7",
  "119": "f8",
  "120": "f9",
  "121": "f10",
  "122": "f11",
  "123": "f12",
  "144": "numlock",
  "145": "scrolllock",
  "186": "semicolon",
  "187": "equalsign",
  "188": "comma",
  "189": "dash",
  "190": "period",
  "191": "slash",
  "192": "graveaccent",
  "220": "backslash",
  "222": "quote"
}

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
      var editor = CodeMirror.fromTextArea(this.myTextarea.nativeElement, {
        lineNumbers: true,
        mode: 'javascript',
      });
      editor.setValue(EXAMPLE_CODE)
      editor.setSize(null, 700)

      // https://stackoverflow.com/a/33908969
      editor.on("keyup", (editor, event) => {
          var __Cursor = editor.getDoc().getCursor();
          var __Token = editor.getTokenAt(__Cursor);

          if (!editor.state.completionActive &&
              !ExcludedIntelliSenseTriggerKeys[(event.keyCode || event.which).toString()] &&
              (__Token.type === "tag" || __Token.string !== " ")) {
              CodeMirror.commands.autocomplete(editor, CodeMirror.hint.javascript, { completeSingle: false });
          }
      });

      // CodeMirror.commands.autocomplete = cmeditor => {
      //   CodeMirror.showHint(cmeditor, CodeMirror.hint.javascript, {
      //       completeSingle: false,
      //   });
      // }
    }
  }

}
