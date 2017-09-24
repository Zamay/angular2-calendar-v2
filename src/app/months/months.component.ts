import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../service/data.service";
import {Subscription} from "rxjs/Subscription";
import {ShareableStreamStoreService} from "../service/shareable-stream-store.service";

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css']
})
export class MonthsComponent implements OnInit {

  public month: Array<any>;
  public subscription: Subscription;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dateService :DataService,
    private shareableStreamStoreService: ShareableStreamStoreService
  ) {

  }
  ngOnInit() {
    let obj = this.dateService.getYearAndMonth();
    this.month = this.dateService.getMonth(obj.year, obj.month);
  }

  goBack(): void {
    this.router.navigate(["years"]);
  }
}
