import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, Output, OnInit } from '@angular/core';
import { MdSlideToggleModule} from '@angular/material';

@Component({
  selector: 'slide-toggle',
  templateUrl: './md-slide-toggle.component.html',
  styleUrls: ['./md-slide-toggle.component.css']
})
export class MdSlideToggleComponent implements OnInit {
@Input() name : any;
@Input() id : any;
@Input() labelPosition : any;
@Input() ariaLabel : any;
@Input() ariaLabelledby : any;
@Input() required : any;
@Input() disableRipple : any;
@Input() checked : any;

@Output() change;
private inputId : any;

  constructor() { }

  ngOnInit() {
  }

}
