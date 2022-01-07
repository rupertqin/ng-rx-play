import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TodoItem } from './constant'

@Component({
  selector: 'app-todos-item',
  template: `
    {{ data.name }}
    <button (click)="remove()">remove</button>
    <button (click)="changeName()">change name</button>
  `,
  styles: [`
  
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosItemComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) { }

  @Input()
  data: TodoItem = {
    name: ''
  }

  @Output()
  readonly renameEvent = new EventEmitter();

  @Output()
  readonly removeEvent = new EventEmitter();
  
  ngOnInit(): void {
    setTimeout(() => {
      // this.renameEvent.emit();
      // this.cdr.detectChanges()
      console.log('renameEvent fired!')
    }, 5000)
  }

  remove() {
    this.removeEvent.emit();
  }

  changeName() {
    // this.data.name = 'Changed'
  }

}
