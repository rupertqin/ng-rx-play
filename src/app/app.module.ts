import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { PdfViewerModule } from '@qingflow/ng2-pdf-viewer';
// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CallbackPipe } from './callback.pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { ArticleComponent, CatPipe } from './components/article/article.component';
import { MissionComponent } from './mission/mission.component';
import { AstronautComponent } from './mission/astronaut.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    ArticleComponent,
    MissionComponent,
    AstronautComponent,
    CallbackPipe,
    CatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PdfViewerModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
