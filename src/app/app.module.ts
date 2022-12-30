import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './user/user.service'
// import { PdfViewerModule } from '@qingflow/ng2-pdf-viewer';
// import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

import { MissionModule } from './mission/mission.module';
import { MissionService } from './mission/mission.service';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PdfViewerModule,
    MissionModule.forChild({name: 778899}),
  ],
  providers: [
    // MissionService
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
