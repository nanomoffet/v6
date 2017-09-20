import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [  	
  	'./carousel.component.css',
  ],
  providers: [
  	NgbCarouselConfig
  ]
  //encapsulation: ViewEncapsulation.None, 
})
export class CarouselComponent implements OnInit {
  @Input() slides:any=[];

  constructor(private config:NgbCarouselConfig) { }

  ngOnInit() {
  	this.config.interval = 10000;
    this.config.wrap = false;
    this.config.keyboard = true;
  }
}
