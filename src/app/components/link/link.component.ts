import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() imageUrl: any;  
  @Input() link: any;

  constructor() { }

  ngOnInit() {
  }

}
