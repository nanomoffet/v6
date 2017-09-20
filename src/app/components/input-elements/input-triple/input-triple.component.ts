import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'input-triple',
  templateUrl: './input-triple.component.html',
  styleUrls: ['./input-triple.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InputTripleComponent implements OnInit {
  // 1 label calls first input
  @Input() name:string;
  @Input() _name:string;
  @Input() for:string;
  @Input() edit: boolean = false;
  // 3 input elements
  @Input() id1:string;
  @Input() type1: string = "text";
  @Input() value1:any;
  @Input() id2:string;
  @Input() type2: string = "text";
  @Input() value2:any;
  @Input() id3:string;
  @Input() type3: string = "text";
  @Input() value3:any;

  constructor() { }

  ngOnChanges() {
    this._name = this.name;
    //console.log(this._name);
  }

  ngOnInit() {
  }

}
