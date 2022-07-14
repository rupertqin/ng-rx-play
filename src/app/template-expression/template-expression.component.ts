import { Component, AfterViewInit, ChangeDetectionStrategy, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-template-expression',
  templateUrl: './template-expression.component.html',
  styleUrls: ['./template-expression.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateExpressionComponent implements OnChanges, AfterViewInit {
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    // 这里能触发变化
    // this.familyName = 'Birkin'

    // setTimeout(() => {
    //   // 这里不能能触发变化
    //   this.familyName = 'Birkin latter'
    // }, 3000)
  }
  familyName = ''

  _data = {
    familyName: ''
  }

  // getter 传值到子组件，子组件的 ngModel 不能改值
  get data() {
    return this._data;
    return {
      familyName: this.familyName,
    }
  }
  // data = {
  //   familyName: ''
  // }

  ngOnInit(): void {
    // 这里能触发变化
    // this.familyName = 'Birkin'

    setTimeout(() => {
      // 这里不能能触发变化
      this.familyName = 'Birkin latter'
    }, 3000)
  }

  ngAfterViewInit(): void {
    // 这里不能触发变化
    // ChangeDetectionStrategy.Default: 同步mutate 会报错： ExpressionChangedAfterItHasBeenCheckedError
    // this.familyName = 'Birkin view'

    // setTimeout(() => {
    //   // 这里不能能触发变化
    //   this.familyName = 'Birkin view latter'
    //   this.changeDetectorRef.detectChanges()
    // }, 3000)

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ', changes.familyName)
  }

  changeName() {
    this.familyName = 'Click'
    console.log('parent click')
  }

  get msg() {
    return this.familyName;
  }

}
