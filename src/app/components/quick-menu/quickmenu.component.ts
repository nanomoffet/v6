import { Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter, ViewEncapsulation, HostListener } from '@angular/core';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'icon-quickmenu',
  templateUrl: './quickmenu.component.html',
  styleUrls: ['./quickmenu.component.css']
})
export class QuickmenuComponent implements OnInit {
  notifications: any;
	@Input() icon : string;
  @Input() badgeNumber : string;
  @Input() link : string;
	@Input() popOverTitle : any;  
	@Input() popOverContent : any;
	@Output() close = new EventEmitter<any>();
  //@ViewChild('popover-block') public _selector:ElementRef;
  
  constructor(config: NgbPopoverConfig) {
			config.triggers = 'blur click';
	 }


  // trying to see about the Init and Destroy through functionality
  @Output('init')  init = new EventEmitter();

  @Output('destroy')  destroy = new EventEmitter();

  ngOnInit() {
    this.init.emit();
  }

  ngOnDestroy() {
    this.destroy.emit();
  }

}
