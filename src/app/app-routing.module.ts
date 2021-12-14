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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
