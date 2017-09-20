import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import * as $ from 'jquery';

export interface Ifacetsearch { title:string, facetList: Array<Ifacet> } 
export interface Ifacet { input: string, description: string, badge: string }

@Component({
  selector: 'search-facet',
  templateUrl: './search-facet.component.html',
  styleUrls: ['./search-facet.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchFacetComponent implements OnInit {
  @Input() id:string;
  @Input() FacetSearch: Array<Ifacetsearch>;
// Facet Type, list of facet search { input, description, badge }

  constructor() { }

  ngOnInit() {
    console.log(this.id);
    $('#material-type').parent().addClass("open");
    $('#material-type').find('i').removeClass('fa-angle-down');
    $('#material-type').find('i').addClass('fa-angle-up');

    $('#Subject').parent().addClass("open");
    $('#Subject').find('i').removeClass('fa-angle-down');
    $('#Subject').find('i').addClass('fa-angle-up');
    
    $('#Author').parent().addClass("open");
    $('#Author').find('i').removeClass('fa-angle-down');
    $('#Author').find('i').addClass('fa-angle-up');
  }

  public toggleFacet() {
      //console.log(this);
      //console.log(this.id);
      let myID = "#" + this.id;
      if ($(myID).parent().hasClass("open")) {
          $(myID).parent().removeClass("open");
          $(myID).find('i').removeClass('fa-angle-up');
          $(myID).find('i').addClass('fa-angle-down');
      } else {
          $(myID).parent().addClass("open");
          $(myID).find('i').removeClass('fa-angle-down');
          $(myID).find('i').addClass('fa-angle-up');
      }
  }
}
