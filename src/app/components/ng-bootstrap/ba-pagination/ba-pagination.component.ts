import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-pagination',
  templateUrl: './ba-pagination.component.html',
  styleUrls: ['./ba-pagination.component.css']
})
export class BaPaginationComponent implements OnInit {
  page = 1;
  constructor() { }

  ngOnInit() {
  }

}
