import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InputCheckboxComponent implements OnInit {
  @Input() id:string;
  @Input() name:string;
  @Input() _name:string;
  @Input() edit: boolean = false;
  @Input() for:string;
  @Input() type: string = "checkbox";
  @Input() value:any;


  constructor() { }

  ngOnInit() {
  }

}
