import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { APIServiceService } from '../apiservice/apiservice.service';
import { Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { ConfigService } from '../config/config.service';

@Injectable()
export class TokenService {
	private key:string = "token";
	private url:string = "";

    constructor(private storageService: StorageService, private apiService: APIServiceService, private configService: ConfigService) { 
	}

    public ngOnInit() {
        this.url = this.configService.BaseUrl + "/auth";
	}

	public getToken(){
		let result:any;
		result = this.storageService.getItem(this.key);		
		if(result === undefined)
		{
			result = "";
		}else
		{
			result = result.data;
		}
		return result;	
	}

	public isAuthenticated(){
		let result = false;
		result = this.storageService.getItem(this.key)
	}

	public fetchToken(requestData){
        this.url = this.url = this.configService.BaseUrl + "/auth";
		this.apiService.post(this.url, requestData)
			.map((data) => data.json())
			.subscribe((token) =>this.storeToken(this.storageService, token));
	}

	private processError(error){
		console.log("Error: " + error);
		return Observable.throw(error.json().error);
	}

	private storeToken(storage, data){
		//console.log(data);
		if(data.status == "ok"){
			console.log(data);
			storage.setItem(this.key, data);			
		}
	}
}