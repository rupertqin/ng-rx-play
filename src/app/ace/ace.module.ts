import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AceComponent } from './ace.component';
import { FormsModule } from '@angular/forms';
import { AceRoutingModule } from './ace-routing.module'

@NgModule({
  declarations: [
    AceComponent
  ],
  imports: [
    AceRoutingModule,
    CommonModule,
    FormsModule,
  ]
})
export class AceModule { }
