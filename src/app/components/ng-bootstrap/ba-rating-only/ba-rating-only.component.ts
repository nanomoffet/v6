import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'ba-rating-only',
  templateUrl: './ba-rating-only.component.html',
  styleUrls: ['./ba-rating-only.component.css']
})
export class BaRatingOnlyComponent implements OnInit {
 @Input() max: number;
 @Input() rate: number;
 @Input() readonly: boolean = true;
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
