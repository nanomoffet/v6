import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
//import { TokenService } from '../token/token.service';
 
@Injectable()
export class APIServiceService {
	private headers:Headers;
	private options:RequestOptions;

	constructor(private http:Http) { 
	}

	public post(url, data){
		this.headers = this.createJsonHeader();
		this.options = this.createOptions(this.headers);
		let result = this.http.post(url, data, this.options);
		return result;
	}
	public postWithToken(url, data, encodedToken){
        this.headers = this.createJsonHeader();
        this.headers = this.appendAuthorization(this.headers, encodedToken);
        this.options = this.createOptions(this.headers);
        let result = this.http.post(url, data, this.options);
        return result;
    }
	public get(url, encodedToken){
		this.headers = this.createJsonHeader();
		this.headers = this.appendAuthorization(this.headers, encodedToken);
		this.options = this.createOptions(this.headers);
		console.log(url);
		console.log(this.options);
		return this.http.get(url, this.options);
	}

	public put(url, data, encodedToken){
		this.headers = this.createJsonHeader();
		this.headers = this.appendAuthorization(this.headers, encodedToken);		
		this.options = this.createOptions(this.headers);
		return this.http.put(url, data, this.options);
	}

	public delete(url, encodedToken){
		this.headers = this.createJsonHeader();
		this.headers = this.appendAuthorization(this.headers, encodedToken);
		this.options = this.createOptions(this.headers);
		return this.http.delete(url, this.options);
	}
	private createOptions(headers){
		let result = new RequestOptions(
			{
				headers: headers
			}
		);
		return result;	
	}
	private createJsonHeader(){
		let result = new Headers();
		result.append('Content-Type', 'application/json; charset=utf-8');
		return result;
	}
	private appendAuthorization(result, encodedToken){
		encodedToken = "Bearer " + encodedToken;
		result.append("authorization", encodedToken);
		return result;
	}
}
