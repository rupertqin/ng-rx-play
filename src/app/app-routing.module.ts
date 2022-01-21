import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'user',
  loadChildren: () => import('./user/user.module').then(m => m.UserModule)
}, {
  path: 'article',
  loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
}, {
  path: 'monaco',
  loadChildren: () => import('./monaco/monaco.module').then(m => m.MonacoModule)
}, {
  path: 'ace',
  loadChildren: () => import('./ace/ace.module').then(m => m.AceModule)
}, {
  path: 'codejar',
  loadChildren: () => import('./codejar/codejar.module').then(m => m.CodejarModule)
}, {
  path: 'anchor',
  loadChildren: () => import('./anchor/anchor.module').then(m => m.AnchorModule)
}, {
  path: 'nz-monaco',
  loadChildren: () => import('./nz-monaco/nz-monaco.module').then(m => m.NzMonacoModule)
}, {
  path: 'todos',
  loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)
}, {
  path: 'template-expression',
  loadChildren: () => import('./template-expression/template-expression.module').then(m => m.TemplateExpressionModule)
}, {
  path: 'code-highlight',
  loadChildren: () => import('./code-highlight/code-highlight.module').then(m => m.CodeHighlightModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
