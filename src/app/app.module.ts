import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import { RouterModule }  from "@angular/router";

import { DecadeModule }  from './decade/decade.module';
import { YearsModule }   from './years/years.module';
import { WeeksModule }   from './weeks/weeks.module';
import { WeekdayModule } from './weekday/weekday.module';
import { MonthsModule }  from './months/months.module';

import { routes }        from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    DecadeModule,
    YearsModule,
    MonthsModule,
    WeeksModule,
    WeekdayModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
