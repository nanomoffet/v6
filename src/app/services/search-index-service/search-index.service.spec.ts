import { TestBed, inject } from '@angular/core/testing';

import { SearchIndexService } from './search-index.service';

describe('SearchIndexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchIndexService]
    });
  });

  it('should be created', inject([SearchIndexService], (service: SearchIndexService) => {
    expect(service).toBeTruthy();
  }));
});
