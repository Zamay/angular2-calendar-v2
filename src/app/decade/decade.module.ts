import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DecadeComponent} from "./decade.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DecadeComponent],
  exports: [DecadeComponent]
})
export class DecadeModule { }
