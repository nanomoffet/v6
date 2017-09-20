export class Targets{
	source: string;
	type: string;
}

export class Query{
	groupID: number;
	term: string;
	operator: string;
	not: number;
}

export class Page{
	"index": number;
	"size": number;
}

export class Facet{
	"term": string;
	"field": string;
}

export class SearchProperties{
	"searchID":string;
	"isDirty":number;
}

export class SearchQuery{	
	private targets:Array<Targets>;
	private facetSearch:Array<Facet>;
	private queries:Array<Query>;
	private sort:Array<any>;
	private page:Page;
	private searchProperties:SearchProperties;
	private searchTerm:string;
	public searchType:string;

	constructor(){
		this.intialize();
	}

	public clearQuery(){
		this.queries = new Array<Query>();
	}

	public addQuery(query){
		this.queries.push(query);
	}

	public clearTargets(){
		this.targets = new Array<Targets>();		
	}

	public addTarget(target){
		this.targets.push(target);
	}

	public addSort(sort){
		this.sort.push(sort);
	}

	public clearSort(){
		this.sort = new Array<any>();
	}

	public clearFacets(){
		this.facetSearch = new Array<Facet>();
	}

	public addFacet(facet){
		this.facetSearch.push(facet);
	}

	public setSearchProperties(searchProperties){
		this.searchProperties = searchProperties;
	}

	private intialize(){
		this.queries = new Array<Query>();
		this.targets = new Array<Targets>();
		this.facetSearch = new Array<Facet>();
		this.sort = new Array<any>();
		this.page = new Page();
		this.searchTerm = "";
		this.searchProperties = new SearchProperties();
		this.page.index = 0;
		this.page.size = 24;
	}
}