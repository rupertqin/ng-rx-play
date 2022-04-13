import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';
import { DynamicComponentComponent } from './dynamic-component.component';


@NgModule({
  declarations: [
    DynamicComponentComponent
  ],
  imports: [
    CommonModule,
    DynamicComponentRoutingModule
  ]
})
export class DynamicComponentModule { }
