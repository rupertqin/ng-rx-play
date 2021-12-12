import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonacoComponent } from './monaco.component';

const routes: Routes = [
  {
    path: '',
    component: MonacoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonacoRoutingModule { }
