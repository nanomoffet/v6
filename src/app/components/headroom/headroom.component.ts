import { Component, ViewChild, OnInit, ViewEncapsulation, HostListener, ElementRef, Input } from '@angular/core';
import * as $ from 'jquery';
import 'headroom.js/dist/headroom.min';
import 'headroom.js/dist/jQuery.headroom.min';

@Component({
  selector: 'headroom',
  templateUrl: './headroom.component.html',
  styleUrls: ['./headroom.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeadroomComponent implements OnInit {
 
 //  @ViewChild('headroom') _selector:ElementRef;


  constructor() { }

  ngOnInit() {
      $(".headroom").headroom({
          "offset": 205,
          "tolerance": 15,
          "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp"
            }
        });
  }
    

 // @HostListener('window:scroll')
 // _onWindowScroll():void {
 //     if (this._window.pageYOffset > 100) {
 //     this._element.nativeElement.classList.add('stick');
 //  } else {
 //     this._element.nativeElement.classList.remove('stick'); 
 //  }
 // }






}
