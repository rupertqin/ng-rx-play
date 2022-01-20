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
  
  ngOnInit(): void {
    // 这里能触发变化
    // this.familyName = 'Birkin'

    // setTimeout(() => {
    //   // 这里不能能触发变化
    //   this.familyName = 'Birkin latter'
    // }, 3000)
  }

  ngAfterViewInit(): void {
    // 这里不能触发变化
    // ChangeDetectionStrategy.Default: 同步mutate 会报错： ExpressionChangedAfterItHasBeenCheckedError
    // this.familyName = 'Birkin view'

    setTimeout(() => {
      // 这里不能能触发变化
      this.familyName = 'Birkin view latter'
      this.changeDetectorRef.detectChanges()
    }, 3000)
      
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger
    console.log('changes: ', changes.familyName)
  }

  changeName() {
    this.familyName = 'Click'
    console.log('parent click')
  }

}
