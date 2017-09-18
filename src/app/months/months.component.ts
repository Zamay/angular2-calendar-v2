import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css']
})
export class MonthsComponent implements OnInit {

  public asd;
  public month: Array<any>;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dateService :DataService
  ) {
  }
  ngOnInit() {
    // this.activatedRoute.params.subscribe((params: Params) => console.log(params));
    // this.month = this.dateService.showCurrMonth();
    // console.log(this.asd);
  }

  goBack(): void {
    this.router.navigate(["years"]);
  }
}
