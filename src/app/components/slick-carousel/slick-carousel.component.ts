import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import * as $ from 'jquery';
import 'slick-carousel/slick/slick';

@Component({
  selector: 'app-slick-carousel',
  templateUrl: './slick-carousel.component.html',
  styleUrls: ['./slick-carousel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SlickCarouselComponent implements OnInit {
  @Input() slideesToShow:any;
  @Input() id:string;
	@Input() autoPlay:boolean = true;

  constructor() { }

  ngOnInit() {
  	// let myID = "#" + this.id;
  	//	$(myID).slick({
  	$(".slickCarousel").not('.slick-initialized').slick({
      // slidesToShow: this.slideesToShow,
      slidesToShow: 6, // manually set to help the infinite looping not be buggy bumpers.
  		slidesToScroll: 3,
      infinite: true,
      autoplay: this.autoPlay,
  		//autoplay: true,
  		autoplaySpeed: 4000,
      variableWidth: true, // set this to overflow the image instead of percentages.
      lazyLoad: 'progressive',
      responsive: [ // these breakpoints start from highest to smallest.
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: this.slideesToShow,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  	});  	
  }
}
