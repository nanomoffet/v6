import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services';

@Component({
  selector: 'list-view-search-result',
  templateUrl: './list-view-search-result.component.html',
  styleUrls: ['./list-view-search-result.component.css']
})
export class ListViewSearchResultComponent implements OnInit {
	searchResult:any;

	constructor(private searchService:SearchService) {
	}

	ngOnInit() {
		this.searchService.getSearchResults()
			.subscribe(data => { console.log(data); this.searchResult = data;});
	}

}
