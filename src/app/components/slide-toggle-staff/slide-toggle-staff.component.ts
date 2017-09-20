import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MdSlideToggleModule} from '@angular/material';

@Component({
  selector: 'staff-slide-toggle',
  templateUrl: './slide-toggle-staff.component.html',
  styleUrls: ['./slide-toggle-staff.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SlideToggleStaffComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
