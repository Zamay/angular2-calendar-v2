import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeeksComponent} from "./weeks.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WeeksComponent],
  exports: [WeeksComponent]
})
export class WeeksModule { }
