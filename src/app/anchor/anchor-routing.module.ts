import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnchorComponent } from './anchor.component'

const routes: Routes = [{
  path: '',
  component: AnchorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnchorRoutingModule { }
