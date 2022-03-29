import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { NgmodelRoutingModule } from './ngmodel-routing.module';
import { NgmodelComponent } from './ngmodel.component';
import { NgmodelInputComponent } from './input.component';


@NgModule({
  declarations: [
    NgmodelComponent,
    NgmodelInputComponent
  ],
  imports: [
    CommonModule,
    NgmodelRoutingModule,
    FormsModule,
  ]
})
export class NgmodelModule { }
