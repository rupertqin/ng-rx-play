import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TemplateExpressionRoutingModule } from './template-expression-routing.module';
import { TemplateExpressionComponent } from './template-expression.component';
import { TemplateExpressionItemComponent } from './template-expression-item.component';
import { FullnamePipe } from './fullname.pipe';


@NgModule({
  declarations: [
    TemplateExpressionComponent,
    TemplateExpressionItemComponent,
    FullnamePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateExpressionRoutingModule
  ]
})
export class TemplateExpressionModule { }
