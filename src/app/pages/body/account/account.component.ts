import { Component, OnInit, AfterViewInit  } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ScrollSpyModule, ScrollSpyService } from 'ngx-scrollspy';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements AfterViewInit {

  constructor(private scrollSpyService: ScrollSpyService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
		//this.scrollSpyService.getObservable('window').subscribe((e: any) => {
		//	console.log('ScrollSpy::test: ', e);
		//});
	}

}
