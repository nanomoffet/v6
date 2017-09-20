import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-timepicker',
  templateUrl: './ba-timepicker.component.html',
  styleUrls: ['./ba-timepicker.component.css']
})
export class BaTimepickerComponent implements OnInit {
  time = {hour: 13, minute: 30};
  constructor() { }

  ngOnInit() {
  }

}
