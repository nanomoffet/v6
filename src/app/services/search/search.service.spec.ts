import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';
import { APIServiceService } from '../apiservice/apiservice.service';
import { TokenService } from '../token/token.service';
import { HttpModule } from '@angular/http';
import { StorageService } from '../storage/storage.service';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    	imports: [HttpModule],
      providers: [SearchService, APIServiceService, TokenService, StorageService]
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
