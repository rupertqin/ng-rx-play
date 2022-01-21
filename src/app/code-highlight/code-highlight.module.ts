import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeHighlightRoutingModule } from './code-highlight-routing.module';

import { SharedModule } from '../shared/shared.module'
import { CodeHighlightComponent } from './code-highlight.component'

@NgModule({
  declarations: [
    CodeHighlightComponent,
  ],
  imports: [
    CommonModule,
    CodeHighlightRoutingModule,
    SharedModule,
  ],
  exports: [
  ],
})
export class CodeHighlightModule { }
