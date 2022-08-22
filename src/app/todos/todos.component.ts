import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../user/user.service'
import { TodoItem } from './constant'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, private userService: UserService) {

  }

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

  rename(item: TodoItem, name: string) {
    item.name = name
  }

  changeAllItemName() {
    this.userService.changeTitle();
    this.items.map(item => item.name = 'Changed')
    this.cdr.checkNoChanges()
  }
}
