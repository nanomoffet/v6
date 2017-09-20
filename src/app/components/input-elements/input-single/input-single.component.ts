import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'input-single',
  templateUrl: './input-single.component.html',
  styleUrls: ['./input-single.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InputSingleComponent implements OnInit {
  @Input() id:string;
  @Input() name:string;
  @Input() _name:string;
  @Input() for:string;
  @Input() type: string = "text";
  @Input() value:any;
  @Input() edit: boolean = false;
  @Input() form : string;

  constructor() { }

  onKeyUp() {
    //console.log(this.name);
    //return this.name;
  }

  ngOnChanges() {
    this._name = this.name;
    //console.log(this._name);
  }

  ngOnInit() {

  }

  ngDoCheck() {
    
  }


}
