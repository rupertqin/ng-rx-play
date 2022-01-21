import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrismComponent } from '../prism/prism.component'

@NgModule({
  declarations: [PrismComponent],
  imports: [
    CommonModule,
  ],
  exports: [PrismComponent],
})
export class SharedModule { }
