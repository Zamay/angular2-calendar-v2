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

import { DataService }   from './service/data.service';
import { ShareableStreamStoreService } from "./service/shareable-stream-store.service";

@NgModule({
  imports: [
    BrowserModule,
    DecadeModule,
    YearsModule,
    MonthsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent],
  providers: [DataService, ShareableStreamStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
