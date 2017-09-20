import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { SearchService } from '../../services';

@Component({
  selector: 'grid-view-search-result',
  templateUrl: './grid-view-search-result.component.html',
  styleUrls: ['./grid-view-search-result.component.css']
})
export class GridViewSearchResultComponent implements OnInit {
	searchResult:any;

	constructor(private searchService:SearchService) {
	}

	ngOnInit() {
		this.searchService.getSearchResults()
			.subscribe(data => { console.log(data); this.searchResult = data;});
	}

}
