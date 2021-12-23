import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnchorRoutingModule } from './anchor-routing.module';
import { AnchorComponent } from './anchor.component';


@NgModule({
  declarations: [
    AnchorComponent
  ],
  imports: [
    CommonModule,
    AnchorRoutingModule
  ]
})
export class AnchorModule { }
