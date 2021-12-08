import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { PdfViewerModule } from '@qingflow/ng2-pdf-viewer';
// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CallbackPipe } from './callback.pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { ArticleComponent, CatPipe } from './components/article/article.component';

import { MissionModule } from './mission/mission.module';
import { MissionService } from './mission/mission.service';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    ArticleComponent,
    CallbackPipe,
    CatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PdfViewerModule,
    MissionModule,
  ],
  providers: [
    // MissionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
