import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzMonacoComponent } from './nz-monaco.component'

const routes: Routes = [{
  path: '',
  component: NzMonacoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NzMonacoRoutingModule { }
