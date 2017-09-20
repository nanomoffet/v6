import { Component, Input, Output, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  @Input() basic : boolean = true;
  @Input() layout : boolean = false;

  constructor() { }

  ngOnInit() {
    $('html').css("overflow-y", "hidden");
  }

  public closeOverlay() {
      $('#edit-overlay').fadeOut(100);
      $('.control-panel-dialog').fadeOut(500);  
      $('html').css("overflow-y", "auto");
  }

  toggleBasic() {
    this.basic = true;
    this.layout = false;
    $('#edit-layout').removeClass("active");
    $('#edit-basic').addClass("active");
  }
  toggleLayout() {
    this.basic = false;
    this.layout = true;
    $('#edit-basic').removeClass("active");
    $('#edit-layout').addClass("active");
  }
}
