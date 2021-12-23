import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-nz-monaco',
  templateUrl: './nz-monaco.component.html',
  styleUrls: ['./nz-monaco.component.scss']
})
export class NzMonacoComponent implements AfterViewInit {
  code = ` import { net }  from "http"
const a = 889

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
  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
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
            [/[{}]/, 'delimiter.bracket'],
            { include: 'common' },
            [/\[error.*/, 'custom-error'],
            [/\[notice.*/, 'custom-notice'],
            [/\[info.*/, 'custom-info'],
            [/\[[a-zA-Z 0-9:]+\]/, 'custom-date'],
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

      // Define a new theme that constains only rules that match this language
      monaco.editor.defineTheme('myCoolTheme', {
        colors: {},
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'custom-info', foreground: '808080' },
          { token: 'custom-error', foreground: 'ff0000', fontStyle: 'bold' },
          { token: 'custom-notice', foreground: 'FFA500' },
          { token: 'custom-date', foreground: '008800' },
        ]
      });

      this.editorOption.language = 'myCustomLanguage';
      this.editorOption.theme = 'myCoolTheme';
      this.editor?.updateOptions(this.editorOption);
      this.reload()

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
