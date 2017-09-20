import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
//import { APIServiceService } from '../../apiservice/apiservice.service';
//import { TokenService , APIServiceService } from '../../../services';

@Injectable()
export class FacetService {
  private facetResults: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() {     
  }

  public getFacet(){
		return this.facetResults.asObservable();
	}

  public updateFacet(facets){
    this.facetResults.next(facets);
  }
}
