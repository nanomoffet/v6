import { Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter, ViewEncapsulation, HostListener } from '@angular/core';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'icon-popover',
  templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.css'],
	providers: [NgbPopoverConfig],
	encapsulation: ViewEncapsulation.None, 
})
export class NotificationComponent implements OnInit {
	notifications: any;
	@Input() icon : string;
	@Input() badgeNumber : string;
	@Input() popOverTitle : any;  
	@Input() popOverContent : any;
	@Output() close = new EventEmitter<any>();
	//@ViewChild('popover-block') public _selector:ElementRef;

	
	// customize default values of popovers used by this component tree
  constructor(config: NgbPopoverConfig) {
			config.triggers = 'click';
			//config.container = 'body';
	 }

	 @HostListener('document:click', ['$event']) onOutsideClick() { 
			this.close.emit(this);
	 } 
	  
  ngOnInit() {
  	this.notifications = [
			{
				href: "/home/body/slide",
				text: "This is an array that is passed when in need of something",
				time: "12:34am",
				icon: "",
				username: "minh"
			},
			{
				text: "This is another array that is passed when in need of something",
				time: "2:59pm",
				icon: "",
				username: "sunny"
			}
		];
  }

  	public closeALL() {
		console.log("hello world");
		$("ngb-popover-window").close();
	}

	public notifyOpen() {
		$('.top-dropdown-menu').css('display','block');
		$('.popover-block').removeClass('hide');
  	}
  	public closeAll() {
		//$('.top-dropdown-menu').css('display','none');
	//	$('.popover-block').addClass('hide');
	//	this.close.emit();
	//this.id.close();
	//let myID = "#" + this.id;
	//$(myID).close();
  	}

}
