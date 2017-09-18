import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css']
})
export class MonthsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(): void {
    this.router.navigate(["years"]);
  }
}
