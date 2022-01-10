import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-template-expression',
  templateUrl: './template-expression.component.html',
  styleUrls: ['./template-expression.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateExpressionComponent implements OnInit {
  constructor() { }
  familyName = ''
  

  ngOnInit(): void {
  }

  changeName() {
    this.familyName = 'Click'
    console.log('parent click')
  }

}
