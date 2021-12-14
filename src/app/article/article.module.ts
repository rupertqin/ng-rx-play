import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './article.component'
import { ArticleRoutingModule } from './article-routing.module'
import { CallbackPipe } from '../callback.pipe'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArticleRoutingModule,
  ],
  declarations: [
    ArticleComponent,
    CallbackPipe,
  ],
})
export class ArticleModule { }
