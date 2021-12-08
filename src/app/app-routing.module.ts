import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'user',
  loadChildren: () => import('./user/user.module').then(m => m.UserModule)
}, {
  path: 'article',
  loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
