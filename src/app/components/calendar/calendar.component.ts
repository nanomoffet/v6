import { Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import * as jQuery from 'jquery';

@Component({	
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.css'],
  
})
export class CalendarComponent implements OnInit {
	public calendarConfiguration:any;
  	private _calendar:Object;

	constructor() { }

	ngOnInit() {
		this.calendarConfiguration = {
	      header: {
	        left: 'prev,next today',
	        center: 'title',
	        right: 'month,agendaWeek,agendaDay'
	      },
	      defaultDate: '2017-06-28',
	      selectable: true,
	      selectHelper: true,
	      editable: true,
	      eventLimit: true,
	      events: [
	        {
	          title: 'All Day Event',
	          start: '2016-03-01',
	          color: '#1b70ef'
	        },
	        {
	          title: 'Long Event',
	          start: '2016-03-07',
	          end: '2016-03-10',
	          color: '#40daf1'
	        },
	        {
	          title: 'Dinner',
	          start: '2016-03-14T20:00:00',
	          color: '#00abff'
	        },
	        {
	          title: 'Birthday Party',
	          start: '2016-04-01T07:00:00',
	          color: '#3c4eb9'
	        }
	      ]
	    };
    	this.calendarConfiguration.select = (start, end) => this._onSelect(start, end);
	}
	
	public onCalendarReady(calendar):void {
		this._calendar = calendar;
	}

	private _onSelect(start, end):void {

		if (this._calendar != null) {
		  let title = prompt('Event Title:');
		  let eventData;
		  if (title) {
		    eventData = {
		      title: title,
		      start: start,
		      end: end
		    };
		    jQuery(this._calendar).fullCalendar('renderEvent', eventData, true);
		  }
		  jQuery(this._calendar).fullCalendar('unselect');
		}
	}	
}
