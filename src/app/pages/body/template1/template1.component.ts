import { Component, OnInit } from '@angular/core';
import { TokenService, SearchIndexService } from '../../../services';
import { config } from '../../../config';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {


	

 private FacetSearch = 		
		{
			title:"Material Type",
			facetList:[
				{ input: "book-teen", description: "Book - Teen", badge: "18" },
				{ input: "book", description: "Book", badge: "11" },
				{ input: "book-child", description: "Book - Child", badge: "9" },
				{ input: "Electronic ", description: "Electronic ", badge: "4" },
				{ input: "Art ", description: "Art ", badge: "3" },
				{ input: "cdbook", description: "Book on CD", badge: "3" },
				{ input: "cdbook-child", description: "Book on CD - Child", badge: "3" },
				{ input: "cdbook-teen", description: "Book on CD - Teen", badge: "3" },
				{ input: "dabook-teen", description: "Digital Audio Book-Teen", badge: "3" },
				{ input: "abook-teen", description: "Book on Audio Tape-Teen", badge: "2" },
				{ input: "dvd", description: "DVD", badge: "2" },
				{ input: "cd", description: "Compact Disc", badge: "1" },
			],
		}
















	Links = [
		{
			link: "http://www.yahoo.com",
			imageUrl: "http://kenwheeler.github.io/slick/img/fonz2.png"	
		},
		{
			link: "http://www.youtube.com",
			imageUrl: "http://kenwheeler.github.io/slick/img/fonz1.png"	
		}
	];

	slides = [
		{
			//id: 1,
			imageUrl: "https://lorempixel.com/900/500?r=1",
			alt: "",
			title: "title",
			description: "this is description",
			url: "http://yahoo.com"
		},
		{
			//id: 2,
			imageUrl: "https://lorempixel.com/900/500?r=2",
			alt: "",
			title: "title 2",
			description: "this is description 2",
			url: "http://msn.com"
		},
		{
			//id: 3,
			imageUrl: "https://lorempixel.com/900/500?r=3",
			alt: "",
			title: "title 3",
			description: "this is description 3",
			url: "http://youtube.com"
		}
	];

  constructor(private tokenService:TokenService) { 
  }

  ngOnInit() {
  	//this.tokenService.fetchToken(this.createGuessLogiRequest());  	
  	//console.log("Token: " + this.tokenService.getToken());  	
  	
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
