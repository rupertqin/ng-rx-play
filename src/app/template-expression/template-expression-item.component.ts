import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-template-expression-item',
  template: `
    <div>
      <div>
        <button (click)="changeName()"> change name </button>
      </div>
      <div>
        FullNamePipe: {{ name | fullname: familyName }}
      </div>
      <div>
        getterFullName: {{ getterFullName }}
      </div>
      <div>
        Child full name: {{ fullName() }}
      </div>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateExpressionItemComponent implements OnInit {
  constructor() { }

  @Input()
  familyName = ''

  name = 'Tom'

  fullName() {
    console.log('fullName')
    return `${this.name} ${this.familyName}`
  }

  changeName() {
    this.name = 'Sam';
  }

  get getterFullName() {
    console.log('getterFullName')
    this.heavyDealing()
    return `${this.name} ${this.familyName}`
  }

  heavyDealing() {
    let b = '';
    for(let i = 0; i < 1000000000; i++) {
      if (i<40) {
        b = 'small'
      } else {
        b = 'big'
      }
    }
  }

  ngOnInit(): void {
  }

}
