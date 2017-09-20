import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InputCurrencyComponent implements OnInit {
  @Input() label:string;
  @Input() name:string;
  @Input() _name:string;
  @Input() edit: boolean = false;


  constructor() { }

  ngOnInit() {
  }

}
