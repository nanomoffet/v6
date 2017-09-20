import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { 
  }

  public getItem(key){  	
  	let result:any;
  	if(this.isExisted(key)){
  		result = sessionStorage.getItem(key);	
  		result = JSON.parse(result);
  	}
  	return result;
  }

  public setItem(key, data){
  	sessionStorage.setItem(key, JSON.stringify(data));
  	return data;
  }

  public remove(key){
  	let result = false;
  	if(this.isExisted(key)){
  		sessionStorage.removeItem(key);
  		result = true;
  	}
  	return result;
  }

  public clearAll(){
  	sessionStorage.clear();
  }

  private isExisted(key){
  	return sessionStorage.getItem(key) !== null;
  }
}
