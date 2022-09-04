import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-nz-monaco',
  templateUrl: './nz-monaco.component.html',
  styleUrls: ['./nz-monaco.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NzMonacoComponent implements AfterViewInit {
  constructor(private fb: FormBuilder) {}
  code =
`import { net }  from "http"
const a = 889

[2020 12 25 16:44]
[error]
a = {
	money: qf.{money$$1J7A$$},
  code: qf.{fromCode$$07X1$$},
  cat: qf.{cat$$07X1$$},
}
{money$$1J7A$$}{cat$$07X1$$}{fromCode$$07X1$$}
b = \`\${x}\`
a = {
    name: 'tom'
}
`

  editorOption = {
    language: 'javascript',
    theme: 'vs-dark'
  }
  loading = false
  editor: any = null

  monacoForm = this.fb.group({
    names: this.fb.array([
      this.fb.control('{money$$1J7A$$}'),
      this.fb.control('{fromCode$$07X1$$}'),
    ])
  })

  get names() {
    return this.monacoForm.get('names') as FormArray;
  }

  addName() {
    this.names.push(this.fb.control(''));
  }

  reloadSetting() {
    const self = this;
    const monaco = (window as any).monaco;
    monaco.languages.register({
      id: 'myCustomLanguage'
    });
    monaco.languages.setMonarchTokensProvider('myCustomLanguage', {
      defaultToken: 'invalid',
      tokenPostfix: '.js',

      keywords: [
        'breakss', 'case', 'catch', 'class', 'continue', 'const',
        'constructor', 'debugger', 'default', 'delete', 'do', 'else',
        'export', 'extends', 'false', 'finally', 'for', 'from', 'function',
        'get', 'if', 'import', 'in', 'instanceof', 'let', 'new', 'null',
        'return', 'set', 'super', 'switch', 'symbol', 'this', 'throw', 'true',
        'try', 'typeof', 'undefined', 'var', 'void', 'while', 'with', 'yield',
        'async', 'await', 'of'
      ],

      typeKeywords: [
        'any', 'boolean', 'number', 'object', 'string', 'undefined'
      ],

      operators: [
        '<=', '>=', '==', '!=', '===', '!==', '=>', '+', '-', '**',
        '*', '/', '%', '++', '--', '<<', '</', '>>', '>>>', '&',
        '|', '^', '!', '~', '&&', '||', '?', ':', '=', '+=', '-=',
        '*=', '**=', '/=', '%=', '<<=', '>>=', '>>>=', '&=', '|=',
        '^=', '@',
      ],

      // we include these common regular expressions
      symbols: /[=><!~?:&|+\-*\/\^%]+/,
      escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
      digits: /\d+(_+\d+)*/,
      octaldigits: /[0-7]+(_+[0-7]+)*/,
      binarydigits: /[0-1]+(_+[0-1]+)*/,
      hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,

      regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
      regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,

      // The main tokenizer for our languages
      tokenizer: {
        root: [
          [/\[error\]/, 'custom-error'],
          [/\[notice.*/, 'custom-notice'],
          // [/\{money\$\$1J7A\$\$\}|\{fromCode\$\$07X1\$\$\}/, 'custom-info'],
          [
            new RegExp(
              'qf.(' +
              self.names.value
                .filter((name: string) => !!name)
                .map((name: string) => name.replace(/([\{\}\$])/g, '\\$1'))
                .join('|')
               + ')'
            ),
            'custom-info'
          ],
          [/\[[a-zA-Z\s0-9:]+\]/, 'custom-date'],
          [/[{}]/, 'delimiter.bracket'],
          { include: 'common' },
        ],

        common: [
          // identifiers and keywords
          [/[a-z_$][\w$]*/, {
            cases: {
              '@typeKeywords': 'keyword',
              '@keywords': 'keyword',
              '@default': 'identifier'
            }
          }],
          [/[A-Z][\w\$]*/, 'type.identifier'],  // to show class names nicely
          // [/[A-Z][\w\$]*/, 'identifier'],

          // whitespace
          { include: '@whitespace' },

          // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)
          [/\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|\/|,|\)|\]|\}|$))/, { token: 'regexp', bracket: '@open', next: '@regexp' }],

          // delimiters and operators
          [/[()\[\]]/, '@brackets'],
          [/[<>](?!@symbols)/, '@brackets'],
          [/@symbols/, {
            cases: {
              '@operators': 'delimiter',
              '@default': ''
            }
          }],

          // numbers
          [/(@digits)[eE]([\-+]?(@digits))?/, 'number.float'],
          [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, 'number.float'],
          [/0[xX](@hexdigits)/, 'number.hex'],
          [/0[oO]?(@octaldigits)/, 'number.octal'],
          [/0[bB](@binarydigits)/, 'number.binary'],
          [/(@digits)/, 'number'],

          // delimiter: after number because of .\d floats
          [/[;,.]/, 'delimiter'],

          // strings
          [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
          [/'([^'\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
          [/"/, 'string', '@string_double'],
          [/'/, 'string', '@string_single'],
          [/`/, 'string', '@string_backtick'],
        ],

        whitespace: [
          [/[ \t\r\n]+/, ''],
          [/\/\*\*(?!\/)/, 'comment.doc', '@jsdoc'],
          [/\/\*/, 'comment', '@comment'],
          [/\/\/.*$/, 'comment'],
        ],

        comment: [
          [/[^\/*]+/, 'comment'],
          [/\*\//, 'comment', '@pop'],
          [/[\/*]/, 'comment']
        ],

        jsdoc: [
          [/[^\/*]+/, 'comment.doc'],
          [/\*\//, 'comment.doc', '@pop'],
          [/[\/*]/, 'comment.doc']
        ],

        // We match regular expression quite precisely
        regexp: [
          [/(\{)(\d+(?:,\d*)?)(\})/, ['regexp.escape.control', 'regexp.escape.control', 'regexp.escape.control']],
          [/(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/, ['regexp.escape.control', { token: 'regexp.escape.control', next: '@regexrange' }]],
          [/(\()(\?:|\?=|\?!)/, ['regexp.escape.control', 'regexp.escape.control']],
          [/[()]/, 'regexp.escape.control'],
          [/@regexpctl/, 'regexp.escape.control'],
          [/[^\\\/]/, 'regexp'],
          [/@regexpesc/, 'regexp.escape'],
          [/\\\./, 'regexp.invalid'],
          [/(\/)([gimsuy]*)/, [{ token: 'regexp', bracket: '@close', next: '@pop' }, 'keyword.other']],
        ],

        regexrange: [
          [/-/, 'regexp.escape.control'],
          [/\^/, 'regexp.invalid'],
          [/@regexpesc/, 'regexp.escape'],
          [/[^\]]/, 'regexp'],
          [/\]/, { token: 'regexp.escape.control', next: '@pop', bracket: '@close' }],
        ],

        string_double: [
          [/[^\\"]+/, 'string'],
          [/@escapes/, 'string.escape'],
          [/\\./, 'string.escape.invalid'],
          [/"/, 'string', '@pop']
        ],

        string_single: [
          [/[^\\']+/, 'string'],
          [/@escapes/, 'string.escape'],
          [/\\./, 'string.escape.invalid'],
          [/'/, 'string', '@pop']
        ],

        string_backtick: [
          [/\$\{/, { token: 'delimiter.bracket', next: '@bracketCounting' }],
          [/[^\\`$]+/, 'string'],
          [/@escapes/, 'string.escape'],
          [/\\./, 'string.escape.invalid'],
          [/`/, 'string', '@pop']
        ],

        bracketCounting: [
          [/\{/, 'delimiter.bracket', '@bracketCounting'],
          [/\}/, 'delimiter.bracket', '@pop'],
          { include: 'common' }
        ],
      },
    });

    monaco.languages.registerCompletionItemProvider('myCustomLanguage', {
      provideCompletionItems(model: any, position: any) {
        // https://segmentfault.com/a/1190000019666661
        // 获取当前行数
        const line = position.lineNumber

        // 获取当前列数
        const column = position.column
        if (column < 4) return;

        // 获取当前输入行的所有内容
        const content = model.getLineContent(line)
        const symbal = content.slice(column - 4, column - 1)
        if (symbal !== 'qf.') return;
        return {
          suggestions: self.names.value
            .filter((name: string) => !!name)
            .map((name: string) => ({
              label: name,
              kind: monaco.languages.CompletionItemKind.Enum,
              insertText: name,
              detail: 'qf.details. ....'
            }))
        }
      },
      triggerCharacters: ['.']
    })

    // Define a new theme that constains only rules that match this language
    monaco.editor.defineTheme('myCoolTheme', {
      colors: {
        'editor.foreground': '#f21bff',
        "editor.background": "#f2fbf4",
        "editor.selectionBackground": "#3e1fe5",
      },
      base: 'vs',
      inherit: true,
      rules: [
        { token: 'custom-info', foreground: '3da3bb' },
        { token: 'custom-error', foreground: 'ff0000', background: 'ff1100', fontStyle: 'bold' },
        { token: 'custom-notice', foreground: 'FFA500' },
        { token: 'custom-date', background: 'ff1100', foreground: '008800', fontStyle: 'italic underline' },
      ]
    });

    this.editorOption.language = 'myCustomLanguage';
    this.editorOption.theme = 'myCoolTheme';
    this.editor?.updateOptions(this.editorOption);
    this.reload()
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.reloadSetting()
    }, 500)
  }

  onEditorInit(editor: any) {
    this.editor = editor;
  }

  reload() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 0);
  }

}
