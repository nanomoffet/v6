import { Component } from '@angular/core';
import { TokenService, SearchIndexService, SearchService } from './services';
import { config } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auto-Graphics';

  constructor(
  	private tokenService:TokenService, 
  	private searchIndexService:SearchIndexService,
  	private searchService:SearchService
  ){
  }

  public ngOnInit(){  	  	  	
  	this.searchIndexService.getData({});
  	//this.searchService.search();
  	//if(this.tokenService.getToken().length == 0){
  		this.tokenService.fetchToken(this.createGuessLogiRequest());			
  	//}
  }

  private createGuessLogiRequest(){
  	let result = {
  		"cid": config.cid,
  		"lid": config.lid,
  		"username": "agstaff",
  		"password": "ch0c0late"
  	};
  	return result;
	}
	
}
