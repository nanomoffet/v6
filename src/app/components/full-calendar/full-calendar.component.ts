import { Component, OnInit, ViewEncapsulation, ViewChild, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import 'fullcalendar/dist/fullcalendar.js';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FullCalendarComponent implements OnInit {
	@Input() FullCalendarConfiguration:Object;
	@Input() FullCalendarClass:string;
	@Output() onCalendarReady = new EventEmitter<any>();

	@ViewChild('FullCalendar') public _selector:ElementRef;
	
	constructor() { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		let calendar = jQuery(this._selector.nativeElement).fullCalendar(this.FullCalendarConfiguration);
		this.onCalendarReady.emit(calendar);
	}

}
