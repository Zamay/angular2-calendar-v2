import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.css']
})
export class WeeksComponent implements OnInit {

  @Input() weeks: Array<any>;
  constructor() { }

  ngOnInit() { }

}
