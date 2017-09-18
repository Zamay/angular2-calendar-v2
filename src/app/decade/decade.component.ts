import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {DataService} from "../service/data.service";

@Component({
  selector: 'app-decade',
  templateUrl: './decade.component.html',
  styleUrls: ['./decade.component.css']
})
export class DecadeComponent implements OnInit {

  public years: Array<any>;
  constructor(
    private router: Router,
    private dateService :DataService
  ) { }

  ngOnInit() {
    this.years = this.dateService.getTenYears();
  }

  onSelect(selected: any) {
    // this.router.navigate(["years", selected.id]);
    this.router.navigate(["years"]);
  }
}
