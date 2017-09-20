import { Component, OnInit } from '@angular/core';
import { TokenService, SearchIndexService } from '../../../services';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.css']
})
export class Template2Component implements OnInit {

  constructor(private service:SearchIndexService) { }

  ngOnInit() {
  	//this.service.clear();
  }

}
