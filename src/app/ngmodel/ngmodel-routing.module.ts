import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgmodelComponent} from './ngmodel.component'

const routes: Routes = [
  {
    path: '',
    component: NgmodelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgmodelRoutingModule { }
