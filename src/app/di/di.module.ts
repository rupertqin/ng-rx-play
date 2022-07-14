import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiRoutingModule } from './di-routing.module';
import { DiComponent } from './di.component';


@NgModule({
  declarations: [
    DiComponent
  ],
  imports: [
    CommonModule,
    DiRoutingModule
  ]
})
export class DiModule { }
