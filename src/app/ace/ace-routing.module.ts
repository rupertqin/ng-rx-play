import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AceComponent } from './ace.component';

const routes: Routes = [
  {
    path: '',
    component: AceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AceRoutingModule { }
