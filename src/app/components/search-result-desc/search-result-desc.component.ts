import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'search-result-desc',
  templateUrl: './search-result-desc.component.html',
  styleUrls: ['./search-result-desc.component.css']
})
export class SearchResultDescComponent implements OnInit {
  @Input() recordFound : any;
  private toggle : boolean = true;

  constructor() { }

  ngOnInit() {
        //console.log(this.recordFound);
        $('.facet-filter').hide();
  }

  toggleFilters() {
      if (this.toggle) {
          this.toggle = !this.toggle;
          $('#filter-icon').removeClass('fa-chevron-down').addClass('fa-chevron-up');
          $('.facet-filter').slideDown();
          
      } else {
          this.toggle = !this.toggle;
          $('#filter-icon').removeClass('fa-chevron-up').addClass('fa-chevron-down');
          $('.facet-filter').slideUp();
      }
  }
}
