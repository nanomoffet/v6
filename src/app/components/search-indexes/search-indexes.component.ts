import { Component, OnInit } from '@angular/core';
import { SearchIndexService } from '../../services';

@Component({
  selector: 'app-search-indexes',
  templateUrl: './search-indexes.component.html',
  styleUrls: ['./search-indexes.component.css']
})
export class SearchIndexesComponent implements OnInit {
	searchIndexes:any;
	selectedOption:any;

	constructor(private indexService:SearchIndexService) { 
	}

	ngOnInit() {
		this.indexService.getSearchIndex()
			.subscribe(data => this.assignSearchIndex(data));
	}

	public onOptionChanged(){		
		
		this.assignSelectedOption([this.selectedOption])
		//this.indexService.updateSelectedIndexes(result)
	}

	private assignSearchIndex(data){
		this.searchIndexes = data;
		this.assignSelectedOption(this.searchIndexes);
	}

	private assignSelectedOption(options){	
		if(options.length > 0 ){
			this.selectedOption = options[0];
			let result = {
				"groupID": options[0].groupID,
				"text": options[0].text
			}
			this.indexService.updateSelectedIndexes(result);			
		}
	}
}
