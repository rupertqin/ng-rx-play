import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrismModule } from '../prism/prism.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [PrismModule],
})
export class SharedModule { }
