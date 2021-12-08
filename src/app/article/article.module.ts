import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent, CatPipe } from './article.component'
import { ArticleRoutingModule } from './article-routing.module'
import { CallbackPipe } from '../callback.pipe'



@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
  ],
  declarations: [
    ArticleComponent,
    CallbackPipe,
    CatPipe,
  ],
  exports: [
  ]
})
export class ArticleModule { }
