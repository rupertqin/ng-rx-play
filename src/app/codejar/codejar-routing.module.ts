import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodejarComponent } from './codejar.component';

const routes: Routes = [
  {
    path: '',
    component: CodejarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodejarRoutingModule { }
