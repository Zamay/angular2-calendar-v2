/**
 * Created by Mitya on 18.09.2017.
 */
import {Routes} from "@angular/router";

import {DecadeComponent} from "./decade/decade.component";
import {YearsComponent} from "./years/years.component";
import {MonthsComponent} from "./months/months.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "months",
    pathMatch: "full"
  },
  {
    path: "decate",
    component: DecadeComponent
  },
  {
    path: "years",
    component: YearsComponent
  },
  {
    path: "months",
    component: MonthsComponent
  },
  // {
  //   path: '**',
  //   redirectTo: 'months'
  // }
];
