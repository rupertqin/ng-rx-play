import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeHighlightRoutingModule } from './code-highlight-routing.module';
import { CodeHighlightComponent } from './code-highlight.component';
import { PrismModule } from '../prism/prism.module';

@NgModule({
  declarations: [
    CodeHighlightComponent,
  ],
  imports: [
    CommonModule,
    CodeHighlightRoutingModule,
    PrismModule,
  ],
  exports: [
  ]
})
export class CodeHighlightModule { }
