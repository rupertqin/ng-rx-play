import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonacoComponent } from './monaco.component';
import { MonacoActionComponent } from './monaco-action.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { MonacoRoutingModule } from './monaco-routing.module'

@NgModule({
  declarations: [
    MonacoComponent,
    MonacoActionComponent,
  ],
  imports: [
    MonacoRoutingModule,
    CommonModule,
    FormsModule,
    MonacoEditorModule.forRoot()
  ]
})
export class MonacoModule { }
