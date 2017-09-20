import { Component, ViewChild, ViewEncapsulation, OnInit, Output, ElementRef, EventEmitter } from '@angular/core';
import { SearchIndexService, SearchService, SearchQuery } from '../../services';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'search-overlay',
  templateUrl: './search-overlay.component.html',
  styleUrls: ['./search-overlay.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchOverlayComponent implements OnInit {
    private searchIndexes: any = [];	
    private searchQuery: SearchQuery;
    // any inputs for forms in this component declare.
    @Output() close = new EventEmitter<any>();
    @ViewChild('search-overlay') public _selector:ElementRef;



    constructor(private searchService:SearchService, private searchIndexService:SearchIndexService, private router:Router) {
     }

  ngOnInit() {
    this.searchIndexes = this.searchIndexService.getSelectedIndexes()
    .subscribe(data => this.searchIndexes = data);
    this.searchQuery = new SearchQuery();
  }

  public search(value: string){
    this.searchQuery = this.buildSearch(value);		
    this.searchService.search(this.searchQuery);
    this.router.navigateByUrl('/body/search');

}

private buildSearch(term){
    this.searchQuery.clearQuery();
    this.searchQuery.clearTargets();
  this.searchQuery.clearSort();
    this.searchQuery.addQuery(this.buildQuery(this.searchIndexes.groupID, term, ""));  		
    this.searchQuery.addTarget(this.buildTarget());
  this.searchQuery.addSort(this.buildSort());		
  this.searchQuery.setSearchProperties(this.buildSearchProperties("", 1));
  this.searchQuery.searchType = "none";
    return this.searchQuery;
}

private buildQuery(groupID, term, operator){
    let result = this.searchService.buildQuery(groupID, term, operator, "");
    return result;
}

private buildSearchProperties(searchID, isDirty){
  let result = this.searchService.buildSearchProperties(searchID, isDirty);
  return result;
}

private buildSort(){
    let result = {
        "column": "title_short",
        "direction": "desc"
    }
  return result;
}

private buildTarget(){
    let result = this.searchService.buildTarget("laporte", "solr");
    return result;
}




  ngAfterViewInit() {
      //console.log($('#search-overlay'));
  }

  public OpenOverlay() {
      $('#search-overlay').css('display','block');
      $('#overlay-search').focus();
  }

  public CloseOverlay() {
      $('#search-overlay').css('display','none');
      $('#overlay-search').val('');   
  }
}



