import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import * as $ from 'jquery';
import { FacetService } from '../../services';

export interface Ifacetsearch { title:string, facetList: Array<Ifacet> } 
export interface Ifacet { input: string, description: string, badge: string }


@Component({
  selector: 'search-all-facets',
  templateUrl: './search-all-facets.component.html',
	styleUrls: ['./search-all-facets.component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class SearchAllFacetsComponent implements OnInit {
	  @Input() id:string;		
		private facets:any;




private ActiveFacets = {
  facetList:[
    { description: "Romantic Novels", query: "" },
		{ description: "Science by Nasa", query: "" },
		{ description: "Artist and Painter", query: "" },
    { description: "Angular 4", query: "" }, 
  ],
}

/*
  private FacetSearch = 		[{
      id: "material-type",
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
    },
    {
      id: "Subject",
			title:"Subject",
			facetList:[
				{ input: "su", description: "Contest", badge: "18" },
				{ input: "su2", description: "Interpersonal Relations", badge: "11" },
				{ input: "su3", description: "Television Programs", badge: "9" },
				{ input: "su4 ", description: "fiction ", badge: "4" },
				{ input: "su5 ", description: "Art ", badge: "3" },
				{ input: "su6", description: "Book on CD", badge: "3" },
				{ input: "su7", description: "Book on CD - Child", badge: "3" },
				{ input: "su8", description: "Book on CD - Teen", badge: "3" },
				{ input: "su9", description: "Digital Audio Book-Teen", badge: "3" },
				{ input: "su10", description: "Book on Audio Tape-Teen", badge: "2" },
				{ input: "su11", description: "DVD", badge: "2" },
				{ input: "su12", description: "Compact Disc", badge: "1" },
			],
    },
    {
      id: "Author",
			title:"Author",
			facetList:[
				{ input: "a1", description: "Contest", badge: "18" },
				{ input: "a2", description: "Interpersonal Relations", badge: "11" },
				{ input: "a3", description: "Television Programs", badge: "9" },
				{ input: "a4 ", description: "fiction ", badge: "4" },
				{ input: "a5 ", description: "Art ", badge: "3" },
				{ input: "a6", description: "Book on CD", badge: "3" },
				{ input: "a7", description: "Book on CD - Child", badge: "3" },
				{ input: "a8", description: "Book on CD - Teen", badge: "3" },
				{ input: "a9", description: "Digital Audio Book-Teen", badge: "3" },
				{ input: "a10", description: "Book on Audio Tape-Teen", badge: "2" },
				{ input: "a11", description: "DVD", badge: "2" },
				{ input: "a12", description: "Compact Disc", badge: "1" },
			],
		},
    {
      id: "Date",
			title:"Date",
			facetList:[
				{ input: "d1", description: "June 15th, 2018", badge: "18" },
				{ input: "d2", description: "07-31-2017", badge: "11" },
				{ input: "d3", description: "1999-07-31", badge: "9" },
				{ input: "d4 ", description: "No Date ", badge: "XX" },
				{ input: "d5", description: "Art ", badge: "3" },
				{ input: "d7", description: "Book on CD", badge: "3" },
				{ input: "d8", description: "Book on CD - Child", badge: "3" },
				{ input: "d9", description: "Book on CD - Teen", badge: "3" },
				{ input: "d10", description: "Digital Audio Book-Teen", badge: "3" },
				{ input: "d11", description: "Book on Audio Tape-Teen", badge: "2" },
				{ input: "d12", description: "DVD", badge: "2" },
				{ input: "d13", description: "Compact Disc", badge: "1" },
			],
    },
    {
      id: "Publisher",
			title:"Publisher",
			facetList:[
				{ input: "p1", description: "June 15th, 2018", badge: "18" },
				{ input: "p2", description: "07-31-2017", badge: "11" },
				{ input: "p3", description: "1999-07-31", badge: "9" },
				{ input: "p4 ", description: "No Date ", badge: "XX" },
				{ input: "p5 ", description: "Art ", badge: "3" },
				{ input: "p6", description: "Book on CD", badge: "3" },
				{ input: "p7", description: "Book on CD - Child", badge: "3" },
				{ input: "p8", description: "Book on CD - Teen", badge: "3" },
				{ input: "p9", description: "Digital Audio Book-Teen", badge: "3" },
				{ input: "p10", description: "Book on Audio Tape-Teen", badge: "2" },
				{ input: "p11", description: "DVD", badge: "2" },
				{ input: "p12", description: "Compact Disc", badge: "1" },
			],
		},
    {
      id: "Title",
			title:"Title",
			facetList:[
				{ input: "t1", description: "June 15th, 2018", badge: "18" },
				{ input: "t2", description: "07-31-2017", badge: "11" },
				{ input: "t3", description: "1999-07-31", badge: "9" },
				{ input: "t4", description: "No Date ", badge: "XX" },
				{ input: "t5 ", description: "Art ", badge: "3" },
				{ input: "t6", description: "Book on CD", badge: "3" },
				{ input: "t7-child", description: "Book on CD - Child", badge: "3" },
				{ input: "t8-teen", description: "Book on CD - Teen", badge: "3" },
				{ input: "t9-teen", description: "Digital Audio Book-Teen", badge: "3" },
				{ input: "t10-teen", description: "Book on Audio Tape-Teen", badge: "2" },
				{ input: "t11", description: "DVD", badge: "2" },
				{ input: "t12", description: "Compact Disc", badge: "1" },
			],
		},
    {
      id: "Format",
			title:"Format",
			facetList:[
				{ input: "f1", description: "June 15th, 2018", badge: "18" },
				{ input: "f2", description: "07-31-2017", badge: "11" },
				{ input: "f3", description: "1999-07-31", badge: "9" },
				{ input: "f4 ", description: "No Date ", badge: "XX" },
				{ input: "f5 ", description: "Art ", badge: "3" },
				{ input: "f6", description: "Book on CD", badge: "3" },
				{ input: "f7-child", description: "Book on CD - Child", badge: "3" },
				{ input: "f8-teen", description: "Book on CD - Teen", badge: "3" },
				{ input: "f9-teen", description: "Digital Audio Book-Teen", badge: "3" },
				{ input: "f10-teen", description: "Book on Audio Tape-Teen", badge: "2" },
				{ input: "f11", description: "DVD", badge: "2" },
				{ input: "f12", description: "Compact Disc", badge: "1" },
			],
		},
    {
      id: "Series",
			title:"Series",
			facetList:[
				{ input: "se1", description: "June 15th, 2018", badge: "18" },
				{ input: "se2", description: "07-31-2017", badge: "11" },
				{ input: "se3", description: "1999-07-31", badge: "9" },
				{ input: "se4 ", description: "No Date ", badge: "XX" },
			],
		},
    {
      id: "Language",
			title:"Language",
			facetList:[
				{ input: "l1", description: "June 15th, 2018", badge: "18" },
				{ input: "l2", description: "07-31-2017", badge: "11" },
				{ input: "l3", description: "1999-07-31", badge: "9" },
				{ input: "l4 ", description: "No Date ", badge: "XX" },
			],
		},
    {
      id: "ReadingLevel",
			title:"Reading Level",
			facetList:[
				{ input: "rl1", description: "June 15th, 2018", badge: "18" },
				{ input: "rl2", description: "07-31-2017", badge: "11" },
				{ input: "rl3", description: "1999-07-31", badge: "9" },
				{ input: "rl4 ", description: "No Date ", badge: "XX" },
			],
    },
  ]
*/

    






  constructor(private facetServce:FacetService) { }

  ngOnInit() {
		this.facetServce.getFacet()
			.subscribe(data => this.assignFacets(data));
  }

	private assignFacets(data){
    console.log(data);
		//console.log(this.FacetSearch);
    this.facets = data;   
		//this.FacetSearch = data; 
	}
}
