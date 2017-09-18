import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(selected: any) {
    this.router.navigate(["months"]);
    // this.router.navigate(["months", selected.id]);
  }

  goBack(): void {
    this.router.navigate(["decate"]);
  }
}
