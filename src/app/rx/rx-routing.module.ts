import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxComponent } from './rx.component'

const routes: Routes = [{
  path: '',
  component: RxComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxRoutingModule { }
