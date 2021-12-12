import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonacoComponent } from './monaco.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { MonacoRoutingModule } from './monaco-routing.module'

@NgModule({
  declarations: [
    MonacoComponent
  ],
  imports: [
    MonacoRoutingModule,
    CommonModule,
    FormsModule,
    MonacoEditorModule.forRoot()
  ]
})
export class MonacoModule { }
