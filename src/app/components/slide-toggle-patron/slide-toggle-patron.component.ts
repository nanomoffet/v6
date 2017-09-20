import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MdSlideToggleModule} from '@angular/material';

@Component({
  selector: 'patron-slide-toggle',
  templateUrl: './slide-toggle-patron.component.html',
  styleUrls: ['./slide-toggle-patron.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SlideTogglePatronComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
