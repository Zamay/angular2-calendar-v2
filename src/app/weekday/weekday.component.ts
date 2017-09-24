import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-weekday',
  templateUrl: './weekday.component.html',
  styleUrls: ['./weekday.component.css']
})
export class WeekdayComponent implements OnInit {

  @Input() weekday: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
