import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'input-calendar',
  templateUrl: './input-calendar.component.html',
  styleUrls: ['./input-calendar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InputCalendarComponent implements OnInit {
  @Input() id:string;
  @Input() name:string;
  @Input() _name:string;
  @Input() edit: boolean = false;
  
  @Input() for:string;
  @Input() type: string = "text";
  @Input() value:any;

  constructor() { }

  ngOnInit() {
  }

}
