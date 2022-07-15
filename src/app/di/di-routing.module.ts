import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvironmentModule } from './environment/environment.module';
import { DiComponent } from './di.component';

const routes: Routes = [
  {
    path: '',
    component: DiComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    EnvironmentModule.forRoot({
      production: false,
      sentry: true,
      agentid: '123555',
    })
  ],
  exports: [RouterModule]
})
export class DiRoutingModule { }
