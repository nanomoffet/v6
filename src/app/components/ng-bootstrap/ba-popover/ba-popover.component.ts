import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ba-popover',
  templateUrl: './ba-popover.component.html',
  styleUrls: ['./ba-popover.component.css']
})
export class BaPopoverComponent implements OnInit {
    @Input() Placement : string;
    @Input() popOverTitle : string;
    @Input() popOverContent : any;
    @Input() calltoAction : any;  
  
  constructor() { }

  ngOnInit() {
  }

}
