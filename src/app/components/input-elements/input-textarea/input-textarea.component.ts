import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InputTextareaComponent implements OnInit {
  @Input() id:string;
  @Input() name:string;
  @Input() _name:string;
  @Input() edit: boolean = false;

  @Input() maxlength:any;
  @Input() rows:any;
  @Input() cols:any;
  @Input() placeholder:any;
  @Input() readonly:any;
  @Input() wrap:any;

  constructor() { }

  ngOnChanges() {
    this._name = this.name;
    //console.log(this._name);
  }



  ngOnInit() {
  }

}
