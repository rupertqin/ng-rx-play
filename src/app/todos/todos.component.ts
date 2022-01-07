import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TodoItem } from './constant'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }

  items: TodoItem[] = []
  name = ''

  ngOnInit(): void {
  }

  add() {
    this.items.push({
      name: this.name,
    })
    this.name = ''
  }

  remove(index: number) {
    this.items.splice(index, 1);
  }

  rename() {

  }

  changeAllItemName() {
    this.items.map(item => item.name = 'Changed')
    this.cdr.checkNoChanges()
  }
}
