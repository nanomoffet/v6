import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { APIServiceService } from '../apiservice/apiservice.service';
import { TokenService } from '../token/token.service';
import { Targets, Query, SearchQuery, SearchProperties } from './searchQuery';
//import { FacetService, TokenService, APIServiceService, Targets, Query, SearchProperties, SearchQuery, ConfigService } from '../../services';
import { FacetService } from "./facet/facet.service";
import { ConfigService } from "../config/config.service";

@Injectable()
export class SearchService {
	private searchResults: BehaviorSubject<any> = new BehaviorSubject([]);	
	private url:string = "";

    constructor(private apiService: APIServiceService, private tokenService: TokenService, private facetService: FacetService, private configService: ConfigService) {
		this.ngOnInit();
	}

    private ngOnInit() {
        this.url = this.configService.BaseUrl + "/search/customer/laporte/library/tenv/user/3/keyword";		
	}

	public search(searchQuery:SearchQuery){
		//this.processSearchResult(this.temp);
		console.log(this.tokenService.getToken());
		this.apiService.postWithToken(this.url, searchQuery, this.tokenService.getToken())
			.map((data) => data.json())
			.subscribe((data) => this.processSearchResult(data));
		
	}

	public getSearchResults(){
		return this.searchResults.asObservable();
	}

	public buildQuery(groupID, term, operator, not){
		let result = new Query();
		result.groupID = groupID;
		result.term = term;
		result.operator = operator;
		result.not = not;
		return result;
	}

    public buildSearchProperties(searchID, isDirty){
        let result = new SearchProperties();
        result.searchID = searchID;
        result.isDirty = isDirty;
        return result;
    }

	public buildTarget(source, type){
		let result = new Targets();
		result.source = source;
		result.type = type;
		return result;
	}

	private processSearchResult(data){		
		//console.log(data);
		//data = JSON.parse(data);
		if(data.status == "ok"){
            this.facetService.updateFacet(data.data.facet.fields);
			this.searchResults.next(data.data.response);
		}
	}

    private createFacets(fields){
        let result = [];
        for(var property in fields){
            result.push(this.createFacet(property, fields[property]));
        }        
        return result;
    }

    private createFacet(property, field){
        let result = {
            name : property,
            items : []
        }
        for(var i = 0; i < field.length; i++){
            result.items.push(field[i]);
        }
        return result;
    }
}

/*
	temp = `{
    "data": {
        "responseHeader": {
            "status": "0"
        },
        "response": {
            "recordFound": "8509",
            "start": "0",
            "maxScore": "property does not exist in this object",
            "books": [
                {
                    "imageURL": "property does not exist in this object",
                    "icon": "http://dev-wrls-verso.auto-graphics.com/mvc/public/images/MediaIcons/book.png",
                    "year": "2005",
                    "title": "Zorro : una novela / Isabel Allende.",
                    "author": "Allende, Isabel.",
                    "agControlID": "13994",
                    "materialType": "",
                    "publisher": "New York : Rayo, [2005],ï¿½200",
                    "locations": {
                        "totalCount": 1,
                        "availableCount": 1,
                        "holdCount": 0,
                        "locations": [
                            {
                                "location": "Main Adult - Spanish Collection",
                                "barcode": "0201107643086",
                                "callNumber": "SPANISH LANGUAGE FIC ALLENDE",
                                "availability": "Available"
                            }
                        ]
                    }
                },
                {
                    "imageURL": "property does not exist in this object",
                    "icon": "http://dev-wrls-verso.auto-graphics.com/mvc/public/images/MediaIcons/book.png",
                    "year": "2005",
                    "title": "Zorro : a novel / Isabel Allende ; translated from the Spanish by Margaret Sayers Peden.",
                    "author": "Allende, Isabel.",
                    "agControlID": "111262",
                    "materialType": "",
                    "publisher": "New York : HarperCollinsPublishers, [2005],ï¿½200",
                    "locations": {
                        "totalCount": 2,
                        "availableCount": 2,
                        "holdCount": 0,
                        "locations": [
                            {
                                "location": "Coolspring Adult - Fiction",
                                "barcode": "0201106827615",
                                "callNumber": "FIC ALLENDE",
                                "availability": "Available"
                            },
                            {
                                "location": "South Central School High School - High School Collection",
                                "barcode": "T 16175",
                                "callNumber": "FIC ALL",
                                "availability": "Available"
                            }
                        ]
                    }
                }
            ]
        },
        "facet": {
            "fields": "",
            "ranges": "",
            "queries": "",
            "interval": "",
            "heatmaps": ""
        }
    },
    "status": "ok",
    "message": "success"
}`;
	*/