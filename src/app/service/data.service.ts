import { Injectable } from '@angular/core';

import {MONTHS} from "../data";
@Injectable()
export class DataService {

  public MONTHS: Array<string> = MONTHS;
  constructor() { }

  public getTenYears() {
    return [
      { year: 2010 },
      { year: 2011 },
      { year: 2012 },
      { year: 2013 },
      { year: 2014 },
      { year: 2015 },
      { year: 2016 },
      { year: 2017 },
      { year: 2018 },
      { year: 2019 },
      { year: 2020 },
    ]
  }

  public getMonths() {
    return this.MONTHS
  }

  public getMonth(month: any, year: any) {
    return
  }
}
