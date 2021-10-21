import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { ArticleComponent } from './components/article/article.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
