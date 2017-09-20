import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';

export interface Ifacetsearch { title:string, facetList: Array<Ifacet> } 
export interface Ifacet { input: string, description: string, badge: string }

@Component({
  selector: 'search-active-facets',
  templateUrl: './search-active-facets.component.html',
  styleUrls: ['./search-active-facets.component.css']
})
export class SearchActiveFacetsComponent implements OnInit {
  @Input() headerTitle : any;
  @Input() rowClass : string;  
  @Input() ActiveFacet: Array<Ifacetsearch>;

// title, class, list of topic search { description, query }
  constructor() { }

  ngOnInit() {
  }

}
