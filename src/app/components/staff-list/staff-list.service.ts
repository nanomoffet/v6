import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import { Observable, BehaviorSubject } from 'rxjs';
import { APIServiceService } from '../../services/apiservice/apiservice.service';
import { TokenService } from '../../services/token/token.service';

@Injectable()
export class StaffMenuService {
	private StaffMenu;	
	private url:string = "";

	constructor(private apiService:APIServiceService, private tokenService:TokenService) { 
        //this.ngOnInit();
	}
	public ngOnInit(){
        //v1/staffMenu/customer/tenv/library/tenv/user/1/getStaffMenu
        //v1/staffMenu/customer/tenv/library/tenv/user/106/getStaffMenu
		//this.url = "http://localhost:3001/v1/staffMenu/customer/tenv/library/tenv/user/106/getStaffMenu";
	}
	public search():any {
        this.url = "http://localhost:3001/v1/staffMenu/customer/tenv/library/tenv/user/106/getStaffMenu";
        let query = "";
        console.log(this.url);
        console.log(this.tokenService.getToken());
        return this.apiService.get(this.url , this.tokenService.getToken())
        .map(res => res.json())
        //return this.apiService.postWithToken(this.url , query , this.tokenService.getToken())
        //     .toPromise()
        //     .then((data) => {
        //         //console.log(data.json());
        //         return data.json()}
        // )
        //     .catch(error => {
        //         //console.log("error: " + error);
        //         return error;});
        }
}