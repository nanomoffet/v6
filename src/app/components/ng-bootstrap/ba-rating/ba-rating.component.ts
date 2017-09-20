import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'ba-rating',
  templateUrl: './ba-rating.component.html',
  styleUrls: ['./ba-rating.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BaRatingComponent implements OnInit {
  @Input() max: number;
  ctrl = new FormControl(null, Validators.required);

  
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
}
