import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeHighlightComponent } from './code-highlight.component';

const routes: Routes = [{
  path: '',
  component: CodeHighlightComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeHighlightRoutingModule { }
