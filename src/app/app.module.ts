import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';

import { DecadeModule }  from './decade/decade.module';
import { YearsModule }   from './years/years.module';
import { WeeksModule }   from './weeks/weeks.module';
import { WeekdayModule } from './weekday/weekday.module';
import { MonthsModule }  from './months/months.module';

@NgModule({
  imports: [
    BrowserModule,
    DecadeModule,
    YearsModule,
    MonthsModule,
    WeeksModule,
    WeekdayModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
