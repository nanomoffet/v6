import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

export interface IselectMenu {  idFor: string, label:string, options: Array<IoptionsItem> }
export interface IoptionsItem { value: string, name: string, selected:string; }

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InputSelectComponent implements OnInit {
  @Input() label:string;
  @Input() name:string;
  @Input() _name:string;
  @Input() edit: boolean = false;

  @Input() idFor:string;
  @Input() form:string;
  @Input() multiple:string;
  @Input() value:any;
  @Input() disabled:string;
  @Input() required:string;

  @Input() SelectDropdown: Array<IselectMenu>;

  constructor() { }

  ngOnInit() {
      // set javascript for the @Input on the select for disabled and required.
  }

}
