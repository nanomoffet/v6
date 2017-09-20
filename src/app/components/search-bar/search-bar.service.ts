import { Injectable } from '@angular/core';
import { APIServiceService, TokenService } from '../../services';

@Injectable()
export class SearchBarService {
	private url:string;

	constructor(private apiService:APIServiceService, private tokenService:TokenService) {
		this.url = "http://localhost:3001/v1/staffMenu/customer/tenv/library/tenv/user/1/getStaffMenu"; 
	}

	ngOnInit(){
	}
}
