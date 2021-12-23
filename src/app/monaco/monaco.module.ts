import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonacoComponent } from './monaco.component';
import { MonacoActionComponent } from './monaco-action.component';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { MonacoRoutingModule } from './monaco-routing.module'

const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets', // configure base path cotaining monaco-editor directory after build default: './assets'
  defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
  onMonacoLoad: () => { 
    console.log('onMonacoLoad: ',(<any>window).monaco); 
  } // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
};

@NgModule({
  declarations: [
    MonacoComponent,
    MonacoActionComponent,
  ],
  imports: [
    MonacoRoutingModule,
    CommonModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig)
  ]
})
export class MonacoModule { }
