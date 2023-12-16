import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeanComponent } from './gean/gean.component';

@NgModule({
  exports: [GeanComponent],
  declarations: [GeanComponent],
  imports: [
    CommonModule
  ],

})
export class GeanModule { }
