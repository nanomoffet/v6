import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, HostListener  } from '@angular/core';
import * as $ from 'jquery';

@Component({
  	selector: 'header',
  	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
	@Input() title:string;
	notifications: any;
	notifications2: any;

	// sticky header - scroll detection.
	lastScrollTop: number = 0;
	dirUp: Boolean = true;
	@HostListener('window:scroll', ['$event']) onScrollEvent($event){
		//console.log($event);
		//console.log("last position: ", this.lastScrollTop);
		let st = window.pageYOffset;
        if (st > this.lastScrollTop) {
			this.dirUp = false;
        } else {
			this.dirUp = true;
        }
		this.lastScrollTop = st;	
		//console.log("new position: ", st );		
	} 


	constructor() { 

	}

	


	ngOnInit() {	


		// Hard coded Values for now...
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


		this.notifications2 = [
			{
				href: "/#/body/home/slide",
				text: "asdfasdfasdfasdfasdf asdfsadf sfd sdffsdsf dsaf dds asdf dfsaf sdaasdf sdf ",
				time: "12:34am",
				icon: "",
				username: "minh"
			},
			{
				href: "/#/body/home/slide",
				text: "asdfasdfasdfsafasdfasdfasdfasdfasf sda fsadf sdfsd",
				time: "2:59pm",
				icon: "",
				username: "sunny"
			}
		];
	}

	openSearchOverlay() {
		$('#search-overlay').css('display','block');
		$('#overlay-search').focus();
	}



}
