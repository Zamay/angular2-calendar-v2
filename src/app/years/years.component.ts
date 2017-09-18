import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {DataService} from "../service/data.service";

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {

  public months: any;
  constructor(
    private router: Router,
    private dateService :DataService
  ) { }

  ngOnInit() {
    this.months = this.dateService.getMonths(); // ["January" , "January" , ...]
  }

  onSelect(selected: any) {
    this.router.navigate(["months"]);
    // this.router.navigate(["months", selected]);
  }

  goBack(): void {
    this.router.navigate(["decate"]);
  }
}
