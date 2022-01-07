import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodosItemComponent } from './todos-item.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodosItemComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
  ]
})
export class TodosModule { }
