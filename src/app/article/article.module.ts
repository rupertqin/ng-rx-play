import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component'
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
  ],
  exports: [
  ]
})
export class ArticleModule { }
