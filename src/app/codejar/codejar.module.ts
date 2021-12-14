import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodejarComponent } from './codejar.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { CodejarRoutingModule } from './codejar-routing.module'

@NgModule({
  declarations: [
    CodejarComponent
  ],
  imports: [
    CodejarRoutingModule,
    CommonModule,
    FormsModule,
    MonacoEditorModule.forRoot()
  ]
})
export class CodejarModule { }
