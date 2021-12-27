import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

import { NzMonacoRoutingModule } from './nz-monaco-routing.module';
import { NzMonacoComponent } from './nz-monaco.component';
import { ProfileEditorComponent } from '../profile-editor/profile-editor.component';


@NgModule({
  declarations: [
    NzMonacoComponent,
    ProfileEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzMonacoRoutingModule,
    NzCodeEditorModule,
  ]
})
export class NzMonacoModule { }
