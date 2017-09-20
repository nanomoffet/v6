import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ba-carousel',
  templateUrl: './ba-carousel.component.html',
  styleUrls: ['./ba-carousel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BaCarouselComponent implements OnInit {

  constructor(private config:NgbCarouselConfig) { }

  ngOnInit() {
    this.config.interval = 10000;
    this.config.wrap = false;
    this.config.keyboard = true;
  }

}
