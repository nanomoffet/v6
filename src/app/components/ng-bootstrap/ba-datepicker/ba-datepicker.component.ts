import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'ba-datepicker',
  templateUrl: './ba-datepicker.component.html',
  styleUrls: ['./ba-datepicker.component.css']
})
export class BaDatepickerComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor() {
    
   }

  ngOnInit() {
  }

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
}
