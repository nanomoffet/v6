import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { APIServiceService } from '../apiservice/apiservice.service';
import { TokenService } from '../token/token.service';
import { ConfigService } from '../config/config.service';

@Injectable()
export class SearchIndexService {
	private searchIndexes: BehaviorSubject<any> = new BehaviorSubject([]);
	private selectedIndexes: BehaviorSubject<any> = new BehaviorSubject([]);	
	private url:string = "";
	private maxErrorRetry:number;
	private retry:number;

    constructor(private apiService: APIServiceService, private tokenService: TokenService, private configService: ConfigService) { 
	}

	public ngOnInit(){
		this.maxErrorRetry = 10;
		this.retry = 0;
	}

	public getData(requestParameters){
		//console.log("i got here");
        this.url = this.configService.BaseUrl + "/search/customer/laporte/library/0/user/1/getSearchOptions";
		this.apiService.get(this.url, this.tokenService.getToken())
			.map((data) => data.json())
			.catch((error) =>this.errorHandling(error, requestParameters))
			.subscribe((data) =>this.processData(data), (error) =>{console.log("my error");});
	}

	public clear(){
		this.searchIndexes.next([]);
	}

	public getSearchIndex(){
		return this.searchIndexes.asObservable();
	}

	public getSelectedIndexes(){
		return this.selectedIndexes.asObservable();
	}

	public updateSelectedIndexes(selectedIndexes){
		this.selectedIndexes.next(selectedIndexes);
	}


	private processData(data){
		if(data.status == "ok"){
			this.searchIndexes.next(data.data);
			this.retry = 0;
		}
	}

	private errorHandling(error, requestParameters){
		/*
		console.log("Error");
		console.log(error._body);
		if(error._body.message.indexOf("token")){
			this.tokenService.fetchToken();
			this.retry = this.retry + 1;
			this.getData(requestParameters)
		}
		*/
		return Observable.throw(error.json().error);
	}
}
