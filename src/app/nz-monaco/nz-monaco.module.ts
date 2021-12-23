import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

import { NzMonacoRoutingModule } from './nz-monaco-routing.module';
import { NzMonacoComponent } from './nz-monaco.component';


@NgModule({
  declarations: [
    NzMonacoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzMonacoRoutingModule,
    NzCodeEditorModule
  ]
})
export class NzMonacoModule { }
