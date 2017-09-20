import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { TokenService } from './token.service';
import { StorageService } from '../storage/storage.service';
import { APIServiceService } from '../apiservice/apiservice.service';

describe('TokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [TokenService, StorageService, APIServiceService]
    });
  });

  it('should be created', inject([TokenService], (service: TokenService) => {
    expect(service).toBeTruthy();
  }));
});
