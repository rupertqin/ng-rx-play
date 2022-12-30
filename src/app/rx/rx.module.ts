import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxRoutingModule } from './rx-routing.module';
import { OperatorsComponent } from './operators/operators.component';
import { RxComponent } from './rx.component';


@NgModule({
  declarations: [
    RxComponent,
    OperatorsComponent,
  ],
  imports: [
    CommonModule,
    RxRoutingModule
  ]
})
export class RxModule { }
