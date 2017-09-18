import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearsComponent } from "./years.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [YearsComponent],
  exports: [YearsComponent]
})
export class YearsModule { }
