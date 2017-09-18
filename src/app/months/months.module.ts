import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MonthsComponent} from "./months.component";
import {WeeksModule} from "../weeks/weeks.module";

@NgModule({
  imports: [
    CommonModule,
    WeeksModule
  ],
  declarations: [MonthsComponent],
  exports: [MonthsComponent]
})
export class MonthsModule { }
