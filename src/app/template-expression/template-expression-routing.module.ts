import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateExpressionComponent } from './template-expression.component'

const routes: Routes = [{
  path: '',
  component: TemplateExpressionComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateExpressionRoutingModule { }
