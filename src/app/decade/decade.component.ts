import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-decade',
  templateUrl: './decade.component.html',
  styleUrls: ['./decade.component.css']
})
export class DecadeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(selected: any) {
    // this.router.navigate(["years", selected.id]);
    this.router.navigate(["years"]);
  }
}
