import { Component, OnChanges, SimpleChanges, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-template-expression-item',
  template: `
    <div>
      <div>
        <button (click)="changeName()"> change name </button>
      </div>
      <div>
        FullNamePipe: {{ name | fullname: data.familyName }}
      </div>
      <div>
        getterFullName: {{ getterFullName }}
      </div>
      <div>
        Child full name: {{ fullName() }}
      </div>
      <div>
        <input type="text" [(ngModel)]="data.familyName" (ngModelChange)="onNameChange($event)">
      </div>
      <div>
        data: <input type="text" [(ngModel)]="data.familyName">
      </div>
      <div>
        _data: <input type="text" [(ngModel)]="_data.dd">
      </div>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateExpressionItemComponent implements OnChanges {
  constructor() { }

  @Input() familyName: string = ''

  @Input() 
  data: any = {
    dd: 'dd'
  };

  name = 'Tom'

  _data: any = {}

  fullName() {
    console.log('fullName')
    return `${this.name} ${this.data.familyName}`
  }

  changeName() {
    this.name = 'Sam';
  }

  onNameChange(val: string) {
    // this.data.familyName = val;
  }

  get getterFullName() {
    console.log('getterFullName')
    this.heavyDealing()
    return `${this.name} ${this.data.familyName}`
  }

  heavyDealing() {
    let b = '';
    for(let i = 0; i < 1000000; i++) {
      if (i<40) {
        b = 'small'
      } else {
        b = 'big'
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.familyName) {
      console.log(changes.familyName.currentValue)
    }
  }

}
